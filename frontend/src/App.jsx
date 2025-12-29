import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // optional for custom overrides

function App() {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Condition: "",
    Drug_Name: "",
    Dosage_mg: "",
    Treatment_Duration_days: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.predicted_side_effect);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`d-flex ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside className="d-none d-lg-flex flex-column bg-white border-end p-3" style={{ width: "280px" }}>
        <div className="mb-4">
          <h3>MedSafe</h3>
          <small>Pro Portal</small>
        </div>
        <nav className="nav flex-column">
          <a className="nav-link active" href="#"><i className="bi bi-heart-pulse"></i> Predictor</a>
          <a className="nav-link" href="#"><i className="bi bi-clock-history"></i> Patient History</a>
          <a className="nav-link" href="#"><i className="bi bi-bar-chart"></i> Analysis</a>
          <a className="nav-link" href="#"><i className="bi bi-gear"></i> Settings</a>
        </nav>
        <div className="mt-auto">
          <button className="btn btn-outline-primary w-100">Sign Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-fill p-4">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h2>Drug Side Effect Predictor</h2>
          <div>
            <button className="btn btn-secondary me-2" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        {/* Form */}
        <div className="card p-4 mb-4">
          <h4>Clinical Input Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Age</label>
                <input type="number" name="Age" className="form-control" value={formData.Age} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Gender</label>
                <select name="Gender" className="form-select" value={formData.Gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Medical Condition</label>
                <input type="text" name="Condition" className="form-control" value={formData.Condition} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Drug Name</label>
                <input type="text" name="Drug_Name" className="form-control" value={formData.Drug_Name} onChange={handleChange} required />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Dosage (mg)</label>
                <input type="number" name="Dosage_mg" className="form-control" value={formData.Dosage_mg} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Treatment Duration (days)</label>
                <input type="number" name="Treatment_Duration_days" className="form-control" value={formData.Treatment_Duration_days} onChange={handleChange} required />
              </div>
            </div>

            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Predicting..." : "Predict Side Effects"}
            </button>
          </form>
        </div>

        {/* Result */}
        {result && (
          <div className="alert alert-info">
            <h5>Predicted Side Effect:</h5>
            <p>{result}</p>
          </div>
        )}

        {/* Info Box */}
        <div className={`card ${darkMode ? "bg-secondary text-light" : "bg-light text-dark"} mt-4 p-3`}>
          <h6>Model Information</h6>
          <p>
            This prediction uses the latest FDA adverse event reporting system (FAERS) data updated as of October 2023. Results are probabilistic and should not replace clinical judgement.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;




