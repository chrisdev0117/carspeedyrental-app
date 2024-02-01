from os import getcwd
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from fastapi_pagination import Page, add_pagination, paginate
from fastapi.responses import FileResponse, HTMLResponse
from starlette import status
from server.config.db_config import SessionLocal, get_db
from server.models.car import Car
from server.models.user import User
from server.schemas.car import CarResponseSchema , CarCreateSchema, PaymentIntentRequest
from fastapi import File, Form, UploadFile
from typing import Annotated
import uuid
import stripe

stripe.api_key = "sk_test_51Odyf8Edv3TCDl3hWzfSTlT66KIxLJ2md8Qbncokbxn63QiiIk2yrdA4XgGTm2ygJohnOduW7urI76k7dzfqScEL00g09v9lHH"

car_router = APIRouter()
IMAGEDIR = "server/images/"
@car_router.get("/")
async def root():
    return {
        "message": "Welcome to the car router!"
    }

@car_router.get('/get/{id}')
def get_car(id: int, db: SessionLocal = Depends(get_db)):
    res_car = db.query(Car).filter(Car.id == id).first()
    return res_car

@car_router.get('/all', response_model=Page[CarResponseSchema])
def get_users(db: SessionLocal = Depends(get_db)):
    cars = db.query(Car).all()
    return  paginate(cars)

@car_router.get('/allcars', response_model=List[CarResponseSchema])
def get_cars(db: SessionLocal = Depends(get_db)):
    cars = db.query(Car).all()
    return  cars

@car_router.get('/allorders', response_model=List[CarResponseSchema])
def get_orders(db: SessionLocal = Depends(get_db)):
    cars = db.query(Car).filter(Car.userId != 0).all()
    return  cars

@car_router.get("/file/{name_file}")
def get_file(name_file: str):
    return FileResponse(path=getcwd() + "/server/images/" + name_file)


@car_router.post("/create", status_code=status.HTTP_201_CREATED)
async def asdfasdf(carname: str = Form(...), per_20days: str = Form(...), per_10days: str = Form(...), per_day: str = Form(...), carimg: UploadFile = File(...), db: SessionLocal = Depends(get_db)):
    carimg.filename = f"{uuid.uuid4()}.jpg"
    contents = await carimg.read()
    with open(f"{IMAGEDIR}{carimg.filename}", "wb") as f:
        f.write(contents)
    
    new_car = Car(
        carname=carname,
        per_20days=per_20days,
        per_10days=per_10days,
        per_day=per_day,
        img_path=carimg.filename,
        userId=0,
        startDate="2020-01-01",
        endDate="2020-01-01",
        totalPrice=0
    )
    
    db.add(new_car)
    
    db.commit()
    res_car = db.query(Car).filter(Car.id == new_car.id).first()
    
    return res_car

@car_router.post("/reservate")
async def create_payment_intent(request: PaymentIntentRequest, db: SessionLocal = Depends(get_db) ):
    try:
        payment_intent = stripe.PaymentIntent.create(
            amount=request.amount,
            currency='usd',  # You can change the currency
            payment_method_types=['card'],
            metadata={'email': request.email, 'userId': request.userId, 'carId': request.carId}
        )
        
        old_car = db.query(Car).filter(Car.id == request.carId)
        old_car.update({'userId': request.userId, 'totalPrice': request.totalPrice, 'startDate': request.startDate, 'endDate': request.endDate})
        db.commit()
        return {"clientSecret": payment_intent.client_secret}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@car_router.delete("/delete/{id}")
async def delete_car(id: int, db: SessionLocal = Depends(get_db)):
    delete_car: Car = db.get(Car, id)
    if delete_car:
        db.delete(delete_car)
        db.commit()
    else:
        raise HTTPException(status_code=404, detail=f"Blog post with id={id} not found.")
    return delete_car



@car_router.post("/update", status_code=status.HTTP_200_OK)
async def update_car(carname: str = Form(...), per_20days: str = Form(...), per_10days: str = Form(...), per_day: str = Form(...), carimg: UploadFile = File(...), id: int = Form(...), db: SessionLocal = Depends(get_db)):
    
    carimg.filename = f"{uuid.uuid4()}.jpg"
    contents = await carimg.read()
    with open(f"{IMAGEDIR}{carimg.filename}", "wb") as f:
        f.write(contents)
    
    old_car = db.query(Car).filter(Car.id == id)
    old_car.update({'carname': carname, 'per_20days': per_20days, 'per_10days': per_10days, 'per_day': per_day, 'img_path': carimg.filename, 'userId': 0})
    new_car = Car(
        id=id,
        carname=carname,
        per_20days=per_20days,
        per_10days=per_10days,
        per_day=per_day,
        img_path=carimg.filename,
        userId=0,
    )
    
    
    db.commit()    
    return {"res":" success"}
