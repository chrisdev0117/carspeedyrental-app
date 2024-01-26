API_VERSION_STR: str = "/api/v1"
API_AUTH_STR: str= API_VERSION_STR + "/auth"
API_CAR_STR: str= API_VERSION_STR + "/car"

DATABASE_URL: str = "postgresql://postgres:221418117@db:5432/testdb"

ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # 30 minutes
ALGORITHM = "HS256"
SECRET_KEY: str = "temporarysecretkey"