from fastapi import FastAPI
from app.api.v1.audit import router as audit_router

app = FastAPI(title="CRO Agent Backend")
app.include_router(audit_router)

@app.get("/health")
async def health():
    return {"status": "ok"}