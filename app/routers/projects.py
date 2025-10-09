import pathlib

import orjson
from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
BASE_DIR = pathlib.Path(__file__).resolve().parent.parent
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))


@router.get("/projects", response_class=HTMLResponse)
async def projects(request: Request) -> HTMLResponse:
    with open(BASE_DIR.parent / "projects.json", "r") as f:
        projects = orjson.loads(f.read())
    return templates.TemplateResponse("projects.html", {"request": request, "projects": projects})
