from sqlalchemy import Column, Integer, String, DateTime, Boolean, text
from datetime import datetime
from server.config.db_config import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String,nullable=False)
    password = Column(String,nullable=False)
    email = Column(String,nullable=False)
    createdAt = Column(DateTime, default=datetime.now)
    updatedAt = Column(DateTime, default=datetime.now)

    class Config:
        from_attributes = True