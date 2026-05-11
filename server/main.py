from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import shutil
import os
import uuid

app = FastAPI(title="Protolabs Clone API")

# Configure CORS
origins = [
    "http://localhost:3000",
    os.getenv("FRONTEND_URL", "*"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.get("/")
async def root():
    return {"message": "Protolabs Clone API is running"}

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    file_extension = os.path.splitext(file.filename)[1].lower()
    if file_extension not in [".stl", ".step", ".stp", ".obj"]:
        raise HTTPException(status_code=400, detail="Invalid file type. Supported: STL, STEP, OBJ")
    
    file_id = str(uuid.uuid4())
    file_path = os.path.join(UPLOAD_DIR, f"{file_id}{file_extension}")
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Mock processing
    # In a real app, we would use trimesh or python-occ here
    mock_quote = {
        "file_id": file_id,
        "filename": file.filename,
        "volume_cm3": 150.5,
        "surface_area_cm2": 450.2,
        "dimensions_mm": {"x": 100, "y": 50, "z": 30},
        "estimated_price_usd": 75.00,
        "lead_time_days": 3
    }
    
    return mock_quote

# --- MongoDB API Routes ---
from database import users_collection, projects_collection
from models import UserModel, ProjectModel, LoginModel
from bson import ObjectId
import bcrypt

# 1. Register a user (Create an account)
@app.post("/api/auth/register")
async def register_user(user: UserModel):
    try:
        # Enforce lowercase email
        email_lower = user.email.lower()
        
        # Check if user exists
        existing_user = await users_collection.find_one({"email": email_lower})
        if existing_user:
            raise HTTPException(status_code=400, detail="Email already registered")
            
        # Hash password
        user_dict = user.model_dump()
        user_dict["email"] = email_lower  # Store as lowercase
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(user_dict["password"].encode('utf-8'), salt)
        user_dict["password"] = hashed.decode('utf-8')
        
        new_user = await users_collection.insert_one(user_dict)
        
        # Return user details without password
        user_dict["_id"] = str(new_user.inserted_id)
        del user_dict["password"]
        
        return {"message": "User created successfully", "user": user_dict}
    except HTTPException:
        raise
    except Exception as e:
        print(f"REGISTER ERROR: {str(e)}")
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

# 1b. Login user
@app.post("/api/auth/login")
async def login_user(login_data: LoginModel):
    email_lower = login_data.email.lower()
    print(f"LOGIN ATTEMPT: {email_lower}")
    
    user = await users_collection.find_one({"email": email_lower})
    if not user:
        print("LOGIN FAILED: User not found")
        raise HTTPException(status_code=401, detail="Invalid email or password")
        
    # Verify password
    try:
        if not bcrypt.checkpw(login_data.password.encode('utf-8'), user["password"].encode('utf-8')):
            print("LOGIN FAILED: Invalid password")
            raise HTTPException(status_code=401, detail="Invalid email or password")
    except Exception as e:
        print(f"LOGIN ERROR: Exception checking password {e}")
        raise HTTPException(status_code=401, detail="Invalid email or password")
        
    user["_id"] = str(user["_id"])
    del user["password"]
    
    print("LOGIN SUCCESSFUL")
    return {"message": "Login successful", "user": user}

# 2. Get all users (For testing purposes)
@app.get("/api/users")
async def get_users():
    users = await users_collection.find().to_list(100)
    for u in users:
        u["_id"] = str(u["_id"])
        del u["password"]
    return users

# 3. Create a project
@app.post("/api/projects")
async def create_project(project: ProjectModel):
    project_dict = project.model_dump()
    new_project = await projects_collection.insert_one(project_dict)
    project_dict["_id"] = str(new_project.inserted_id)
    return {"message": "Project created", "project": project_dict}

# 4. Get projects for a specific user
@app.get("/api/projects/{user_id}")
async def get_user_projects(user_id: str):
    projects = await projects_collection.find({"user_id": user_id}).to_list(100)
    for p in projects:
        p["_id"] = str(p["_id"])
    return projects

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
