from pydantic import BaseModel

class CarResponseSchema(BaseModel):
    carname: str
    per_20days: float
    per_10days: float
    per_day: float
    img_path: str

    class Config:
        from_attributes = True
