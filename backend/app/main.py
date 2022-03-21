from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}



@app.post("/cookie/name{cookie_id}")
async def create_item(item_id: int, item:Item, q:Optional[str]=None):
    result = {"item_id":item_id, **item.dict()}
    
    if q:
        result.update({"q":q})
    
    return result

@app.post("/cook/{cooks_id}")
async def create_cook(item:Item):
    item_dict = item.dict()
    
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax":price_with_tax})
    
    return item_dict

