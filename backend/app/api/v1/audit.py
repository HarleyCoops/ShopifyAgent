from fastapi import APIRouter

router = APIRouter(prefix="/api/v1/audit", tags=["audit"])

@router.get("/")
async def audit():
    return {"message": "This is a stub audit endpoint"}