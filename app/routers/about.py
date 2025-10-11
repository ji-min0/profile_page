import pathlib

import orjson
from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter()
BASE_DIR = pathlib.Path(__file__).resolve().parent.parent
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))


@router.get("/about", response_class=HTMLResponse)
async def about(request: Request, lang:str = "kr") -> HTMLResponse:
    with open(BASE_DIR.parent / "about.json", "rb") as f:
        about = orjson.loads(f.read())
    return templates.TemplateResponse("about.html", {"request": request, "about": about, "lang": "kr"})