// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"; // optional for custom overrides

// function App() {
//   const [formData, setFormData] = useState({
//     Age: "",
//     Gender: "",
//     Condition: "",
//     Drug_Name: "",
//     Dosage_mg: "",
//     Treatment_Duration_days: "",
//   });

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await fetch("https://drug-side-effect-predictor-4.onrender.com/predict", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(formData),
// });
//       const data = await response.json();
//       setResult(data.predicted_side_effect);
//     } catch (error) {
//       console.error("Error:", error);
//       setResult("Error connecting to backend");
//     } finally {
//       setLoading(false);
//     }
//   };
//   // colors: {
//   //                       "primary": "#13ec80",
//   //                       "background-light": "#f6f8f7",
//   //                       "background-dark": "#102219", // Deep medical green/black
//   //                       "surface-dark": "#1c2721",
//   //                       "border-dark": "#283930",
//   //                   },

//   // https://plus.unsplash.com/premium_photo-1661767897334-bbfbdfdc4d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D
//   return (
//     <div className={`d-flex ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <aside className="d-none d-lg-flex flex-column bg-white border-end p-3" style={{ width: "280px" }}>
//         <div className="mb-4">
//           <h3>MedSafe</h3>
//           <small>Pro Portal</small>
//         </div>
//         <nav className="nav flex-column">
//           <a className="nav-link active" href="#"><i className="bi bi-heart-pulse"></i> Predictor</a>
//           <a className="nav-link" href="#"><i className="bi bi-clock-history"></i> Patient History</a>
//           <a className="nav-link" href="#"><i className="bi bi-bar-chart"></i> Analysis</a>
//           <a className="nav-link" href="#"><i className="bi bi-gear"></i> Settings</a>
//         </nav>
//         <div className="mt-auto">
//           <button className="btn btn-outline-primary w-100">Sign Out</button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-fill p-4">
//         {/* Header */}
//         <header className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
//           <h2>Drug Side Effect Predictor</h2>
//           <div>
//             <button className="btn btn-secondary me-2" onClick={() => setDarkMode(!darkMode)}>
//               {darkMode ? "Light Mode" : "Dark Mode"}
//             </button>
//           </div>
//         </header>

//         {/* Form */}
//         <div className="card p-4 mb-4">
//           <h4>Clinical Input Form</h4>
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label>Age</label>
//                 <input type="number" name="Age" className="form-control" value={formData.Age} onChange={handleChange} required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label>Gender</label>
//                 <select name="Gender" className="form-select" value={formData.Gender} onChange={handleChange} required>
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label>Medical Condition</label>
//                 <input type="text" name="Condition" className="form-control" value={formData.Condition} onChange={handleChange} required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label>Drug Name</label>
//                 <input type="text" name="Drug_Name" className="form-control" value={formData.Drug_Name} onChange={handleChange} required />
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label>Dosage (mg)</label>
//                 <input type="number" name="Dosage_mg" className="form-control" value={formData.Dosage_mg} onChange={handleChange} required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <label>Treatment Duration (days)</label>
//                 <input type="number" name="Treatment_Duration_days" className="form-control" value={formData.Treatment_Duration_days} onChange={handleChange} required />
//               </div>
//             </div>

//             <button className="btn btn-primary" type="submit" disabled={loading}>
//               {loading ? "Predicting..." : "Predict Side Effects"}
//             </button>
//           </form>
//         </div>

//         {/* Result */}
//         {result && (
//           <div className="alert alert-info">
//             <h5>Predicted Side Effect:</h5>
//             <p>{result}</p>
//           </div>
//         )}

//         {/* Info Box */}
//         <div className={`card ${darkMode ? "bg-secondary text-light" : "bg-light text-dark"} mt-4 p-3`}>
//           <h6>Model Information</h6>
//           <p>
//             This prediction uses the latest FDA adverse event reporting system (FAERS) data updated as of October 2023. Results are probabilistic and should not replace clinical judgement.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [darkMode, setDarkMode] = useState(true); // default ON for darker UI

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://drug-side-effect-predictor-4.onrender.com/predict", {
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

  // 🎨 Custom dark theme colors
  const colors = {
    primary: "#13ec80",
    backgroundDark: "#102219", // Deep medical green/black
    surfaceDark: "#1c2721",
    borderDark: "#3a5245ff",
    textLight: "#f6f8f7",
  };

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        backgroundColor: colors.backgroundDark,
        color: colors.textLight,
      }}
    >
      {/* Sidebar */}
      <aside
  className="d-none d-lg-flex flex-column p-3"
  style={{
    width: "480px",
    backgroundColor: colors.surfaceDark,
    borderRight: `2px solid ${colors.borderDark}`,
  }}
>
  {/* Top image */}
  <div className="mb-4 text-center">
    <img
      src="https://plus.unsplash.com/premium_photo-1732319199853-808735ed6903?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFyayUyMGdyZWVuJTIwbWVkaWNhbCUyMGRydWd8ZW58MHx8MHx8fDA%3D"
      alt="Medical illustration"
      style={{
        width: "100%",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    />
  </div>

  {/* Sidebar content */}
  <div className="mb-4">
    <h3
  style={{
    color: colors.primary,
    fontSize: "2.5rem", // bigger heading
    fontFamily: "'Poppins', sans-serif", // modern, eye-catching font
    fontWeight: "700", // bold for emphasis
  }}
>
  MedSafe
</h3>

<small
  style={{
    fontSize: "1.1rem", // larger than default small
    fontFamily: "'Roboto Slab', serif", // contrasting font for tagline
    color: colors.textLight,
  }}
>
  Identify and analyze the possible adverse effects of your prescribed medications.
</small></div>
  <nav className="nav flex-column">
    <a className="nav-link active" href="#" style={{ color: colors.primary }}>
      <i className="bi bi-heart-pulse" ></i> Predictor
    </a>
    
  </nav>
</aside>

      {/* Main Content */}
      <main className="flex-fill p-4">
        {/* Header */}
        <header
          className="d-flex justify-content-between align-items-center mb-4 pb-2"
          style={{ borderBottom: `1px solid ${colors.borderDark}` }}
        >
          <h2 style={{ color: colors.primary }}>Drug Side Effect Predictor</h2>
          <div>
            <button
              className="btn"
              onClick={() => setDarkMode(!darkMode)}
              style={{
                backgroundColor: colors.surfaceDark,
                borderColor: colors.borderDark,
                color: colors.textLight,
              }}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        {/* Form */}
        <div
          className="card p-4 mb-4"
          style={{
            backgroundColor: colors.surfaceDark,
            color: colors.textLight,
            border: `1px solid ${colors.borderDark}`,
          }}
        >
          <h4 style={{ color: colors.primary }}>Clinical Input Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Age</label>
                <input
                  type="number"
                  name="Age"
                  className="form-control"
                  value={formData.Age}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: colors.backgroundDark, color: colors.textLight }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Gender</label>
                <select
                  name="Gender"
                  className="form-select"
                  value={formData.Gender}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: colors.backgroundDark, color: colors.textLight }}
                >
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
                <input
                  type="text"
                  name="Condition"
                  className="form-control"
                  value={formData.Condition}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: colors.backgroundDark, color: colors.textLight }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Drug Name</label>
                <input
                  type="text"
                  name="Drug_Name"
                  className="form-control"
                  value={formData.Drug_Name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: colors.backgroundDark, color: colors.textLight }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Dosage (mg)</label>
                <input
                  type="number"
                  name="Dosage_mg"
                  className="form-control"
                  value={formData.Dosage_mg}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: colors.backgroundDark, color: colors.textLight }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Treatment Duration (days)</label>
                <input
                  type="number"
                  name="Treatment_Duration_days"
                  className="form-control"
                  value={formData.Treatment_Duration_days}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: colors.backgroundDark, color: colors.textLight }}
                />
              </div>
            </div>

            <button
              className="btn"
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: colors.primary,
                color: colors.backgroundDark,
                fontWeight: "bold",
              }}
            >
              {loading ? "Predicting..." : "Predict Side Effects"}
            </button>
          </form>
        </div>

        {/* Result */}
        {result && (
          <div
            className="alert mt-3"
            style={{
              backgroundColor: colors.surfaceDark,
              color: colors.primary,
              border: `1px solid ${colors.borderDark}`,
            }}
          >
            <h5>Predicted Side Effect:</h5>
            <p>{result}</p>
          </div>
        )}

        {/* Info Box */}
        <div
          className="card mt-4 p-3"
          style={{
            backgroundColor: colors.surfaceDark,
            color: colors.textLight,
            border: `1px solid ${colors.borderDark}`,
          }}
        >
          <h6 style={{ color: colors.primary }}>Model Information</h6>
          <p>
            This prediction uses the latest FDA adverse event reporting system (FAERS) data updated
            as of October 2023. Results are probabilistic and should not replace clinical judgement.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;