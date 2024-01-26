from fastapi import APIRouter, HTTPException, Depends, Form
from typing import List, Union, Any
from sqlalchemy.orm import Session
from starlette import status
from passlib.context import CryptContext
from datetime import timedelta, datetime
from jose import jwt

from server.models.user import User
from server.schemas.user import UserLoginSchema, UserRegisterSchema, UserResponseSchema, UserTokenSchema
from server.config.env_config import ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM
from server.config.db_config import get_db
from server.utils.auth import hashed_password, verify_password

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def authenticate_user(email: str, password: str, db: Session):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user

def create_access_token(subject: Union[str, Any], expires_delta: timedelta):
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode = {"exp": expire, "sub": str(subject)}

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

auth_router = APIRouter()

@auth_router.get("/")
async def root():
    return {
        "message": "Welcome to the auth router!"
    }

@auth_router.get('/users', response_model=List[UserResponseSchema])
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return  users

@auth_router.post("/signup", status_code=status.HTTP_201_CREATED, response_model=UserResponseSchema)
async def signup_user( user: UserRegisterSchema, db: Session = Depends(get_db)):
    new_user = User(
        username=user.username,
        email=user.email,
        password=hashed_password(user.password),
    )
    db.add(new_user)
    db.commit()
    res_user = db.query(User).filter(User.email == new_user.email).first()
    return res_user

@auth_router.post("/signin", response_model=UserTokenSchema)
async def signin_user( user: UserLoginSchema, db: Session = Depends(get_db)):
    user = await authenticate_user(user.email, user.password, db)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(user.id, expires_delta=access_token_expires)
    return {
        "username": user.username,
        "access_token": access_token,
        "token_type": "fastapi",
    }
