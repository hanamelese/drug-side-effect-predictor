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
allow_origins=["*"],        # Allow all domains
allow_credentials=True,     # Allow cookies/auth headers if needed
allow_methods=["*"],        # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
allow_headers=["*"],        # Allow all headers (Content-Type, Authorization, etc.)
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
