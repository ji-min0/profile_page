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
    with open(BASE_DIR.parent / "projects.json", "rb") as f:
        projects = orjson.loads(f.read())
    return templates.TemplateResponse("projects.html", {"request": request, "projects": projects})

@router.get("/projects/{project_id}", response_class=HTMLResponse)
async def project_details(request: Request, project_id: int) -> HTMLResponse:
    with open(BASE_DIR.parent / "project_detail.json", "rb") as f:
        project_detail = orjson.loads(f.read())
    return templates.TemplateResponse("detail.html", {"request": request, "project_detail": project_detail, "project_id": project_id})