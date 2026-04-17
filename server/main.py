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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
