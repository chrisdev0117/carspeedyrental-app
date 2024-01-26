import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse, HTMLResponse, FileResponse
from starlette.staticfiles import StaticFiles
from pathlib import Path
from server.config.env_config import API_AUTH_STR, API_CAR_STR
from server.routes.auth import auth_router
from server.routes.car import car_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix=API_AUTH_STR, tags=[])
app.include_router(car_router, prefix=API_CAR_STR, tags=[])

app.mount("/", StaticFiles(directory="client/build/", html=True))

if __name__ == '__main__':
    uvicorn.run(app="main:app", host='0.0.0.0', port=8000, reload=True)