from typing import List
from fastapi import APIRouter, Depends

from server.config.db_config import SessionLocal, get_db
from server.models.car import Car
from server.schemas.car import CarResponseSchema

car_router = APIRouter()

@car_router.get("/")
async def root():
    return {
        "message": "Welcome to the car router!"
    }

@car_router.get("/all", response_model=List[CarResponseSchema])
def get_cars(db: SessionLocal = Depends(get_db)):
    cars = db.query(Car).all()
    return  cars