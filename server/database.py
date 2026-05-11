import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

# We use a local mongodb url by default if none provided
MONGO_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DATABASE_NAME", "protolabs_db")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Collections
users_collection = db.get_collection("users")
projects_collection = db.get_collection("projects")
quotes_collection = db.get_collection("quotes")
