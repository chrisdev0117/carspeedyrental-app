from pydantic import BaseModel
from fastapi import File, Form, UploadFile
from typing import Annotated
from datetime import date

class RentalUserSchema(BaseModel):
    username: str
    email: str
    phone: str
    class Config:
        from_attributes  = True
        
        
class CarResponseSchema(BaseModel):
    id: int
    carname: str
    per_20days: float
    per_10days: float
    per_day: float
    img_path: str
    startDate: date
    endDate: date
    totalPrice: float
    user: RentalUserSchema

    class Config:
        from_attributes  = True
        
class CarCreateSchema(BaseModel):
    carname: str = Form(...)
    per_20days: str = Form(...)
    per_10days: str = Form(...)
    per_day: str = Form(...)
    img_path: str = Form(...)
    
    class Config:
        from_attributes  = True

class PaymentIntentRequest(BaseModel):
    amount: int
    email: str
    carId: int
    userId: int
    totalPrice: float
    startDate: str
    endDate: str
    