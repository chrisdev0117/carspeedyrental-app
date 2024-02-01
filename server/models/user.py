from sqlalchemy import Column, Integer, String, DateTime, Boolean, text, Date
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func 

from datetime import datetime, date
from server.config.db_config import Base, get_db
from server.models.car import Car

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String,nullable=False)
    password = Column(String,nullable=False)
    email = Column(String,nullable=False)
    createdAt = Column(Date, default=datetime.now)
    updatedAt = Column(Date, default=datetime.now)
    role = Column(String,nullable=False)
    phone = Column(String,nullable=False)

    cars = relationship("Car", back_populates="user")

    class Config:
        from_attributes = True