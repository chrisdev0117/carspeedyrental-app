from sqlalchemy import Column, Integer, String, Float, Date, Boolean, text, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from server.config.db_config import Base

class Car(Base):
    __tablename__ = "cars"

    id = Column(Integer, primary_key=True, autoincrement=True)
    carname = Column(String,nullable=False)
    per_20days = Column(String,nullable=False)
    per_10days = Column(String,nullable=False)
    per_day = Column(String,nullable=False)
    img_path = Column(String, nullable=False)
    userId = Column(Integer, ForeignKey("users.id"))
    
    startDate = Column(Date)
    endDate = Column(Date)
    totalPrice = Column(Float)
    
    user = relationship("User", back_populates="cars")
    
    class Config:
        from_attributes = True