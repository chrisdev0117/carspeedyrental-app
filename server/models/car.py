from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, text
from datetime import datetime
from server.config.db_config import Base

class Car(Base):
    __tablename__ = "cars"

    id = Column(Integer, primary_key=True, autoincrement=True)
    carname = Column(String,nullable=False)
    per_20days = Column(Float,nullable=False)
    per_10days = Column(Float,nullable=False)
    per_day = Column(Float,nullable=False)
    img_path = Column(String, nullable=False)

    class Config:
        from_attributes = True