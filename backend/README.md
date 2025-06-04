# Backend API

FastAPI-based backend for the CRO agent.

## Setup
```bash
cd backend
poetry install
```

## Running
Make sure Docker Compose is up (`docker-compose up`). Then:
```bash
poetry run uvicorn app.main:app --reload
```

## Tests & Lint
```bash
poetry run flake8 .
poetry run pytest -q
```