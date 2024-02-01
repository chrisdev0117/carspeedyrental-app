from pydantic import BaseModel
from server.models.car import Car
from typing import List
from server.schemas.car import CarResponseSchema


class UserResponseSchema(BaseModel):
    id: int
    username: str
    email: str
    phone: str
    cars: List[CarResponseSchema]

    class Config:
        from_attributes  = True

class UserLoginSchema(BaseModel):
    email: str
    password: str

    class Config:
        from_attributes = True

class UserRegisterSchema(BaseModel):
    username: str
    email: str
    phone: str
    password: str
    
    class Config:
        from_attributes = True

class UserTokenSchema(BaseModel):
    id: int
    username: str
    email: str
    phone: str
    access_token: str
    token_type: str
    role: str
    
    
class UserReservationSchema(BaseModel):
    carname: str
    per_20days: float
    startDate: str
    endDate: str
    totalPrice: float