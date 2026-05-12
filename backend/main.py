from fastapi import FastAPI
from typing import Dict

app = FastAPI(title="EduSphere ERP API")

@app.get("/")
async def root():
    return {"message": "Welcome to EduSphere SaaS School ERP API"}

@app.get("/api/stats")
async def get_stats() -> Dict:
    return {
        "students": {"total": 1240, "change": 12},
        "teachers": {"total": 86, "change": 2},
        "revenue": {"total": 124500, "change": 8},
        "exams": {"total": 12, "status": "active"}
    }

