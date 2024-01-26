from pydantic import BaseModel

class UserResponseSchema(BaseModel):
    username: str
    email: str

    class Config:
        from_attributes = True

class UserLoginSchema(BaseModel):
    email: str
    password: str

    class Config:
        from_attributes = True

class UserRegisterSchema(BaseModel):
    username: str
    email: str
    password: str

    class Config:
        from_attributes = True

class UserTokenSchema(BaseModel):
    username: str
    access_token: str
    token_type: str