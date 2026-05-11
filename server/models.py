from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

class ProjectModel(BaseModel):
    user_id: str
    name: str
    description: Optional[str] = None
    manufacturing_services: List[str] = []
    itar_restricted: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_encoders = {ObjectId: str}

class UserModel(BaseModel):
    title: Optional[str] = None
    first_name: str
    last_name: str
    company: Optional[str] = None
    country: Optional[str] = "India"
    email: EmailStr
    password: str
    phone_number: Optional[str] = None
    postal_code: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_encoders = {ObjectId: str}

class LoginModel(BaseModel):
    email: EmailStr
    password: str
