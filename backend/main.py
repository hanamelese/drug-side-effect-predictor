from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI
app = FastAPI(title="Drug Side Effect Prediction API")

# Enable CORS (IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = joblib.load("model/side_effect_model.joblib")

# Input schema
class PatientInput(BaseModel):
    Age: int
    Gender: str
    Condition: str
    Drug_Name: str
    Dosage_mg: float
    Treatment_Duration_days: int

# Prediction endpoint
@app.post("/predict")
def predict_side_effect(data: PatientInput):
    input_df = pd.DataFrame([data.dict()])
    prediction = model.predict(input_df)[0]
    return {"predicted_side_effect": prediction}
