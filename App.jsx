import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [patient, setPatient] = useState({
  name: "",
  age: "",
  bloodGroup: "",
  allergies: "",
  pastSurgeries: "",
  phone: "",
});

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  if (page === "create") {
    return (
      <div className="app">
        <header className="navbar">
          <div className="logo">
            <span className="logo-icon">✚</span>
            LYNEATH
          </div>

          <button
            className="login-btn"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>
        </header>

        <main className="features">
          <div style={{ maxWidth: "650px", margin: "0 auto" }}>
            <div className="section-heading">
              <span>CREATE YOUR UNIVERSAL HEALTH ID</span>

              <h2>Let's create your secure health profile.</h2>
            </div>

            <div
              style={{
                marginTop: "35px",
                background: "white",
                padding: "35px",
                borderRadius: "15px",
                border: "1px solid #e0d9ce",
              }}
            >
              <label>Full Name</label>
              <input
                name="name"
                value={patient.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <label>Age</label>
              <input
                name="age"
                value={patient.age}
                onChange={handleChange}
                placeholder="Enter your age"
                type="number"
              />

              <label>Blood Group</label>
              <select
                name="bloodGroup"
                value={patient.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

              <label>Allergies</label>
              <input
                name="allergies"
                value={patient.allergies}
                onChange={handleChange}
                placeholder="Example: Penicillin"
              />
              <label>Past Surgeries</label>
<input
  name="pastSurgeries"
  value={patient.pastSurgeries}
  onChange={handleChange}
  placeholder="Example: Appendectomy - 2022"
/>

              <label>Phone Number</label>
              <input
                name="phone"
                value={patient.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

              <button
                className="primary-btn"
                style={{
                  width: "100%",
                  marginTop: "20px",
                }}
                onClick={() => setPage("dashboard")}
              >
                Create Health ID →
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (page === "dashboard") {
    return (
      <div className="app">
        <header className="navbar">
          <div className="logo">
            <span className="logo-icon">✚</span>
            LYNEATH
          </div>

          <button
            className="login-btn"
            onClick={() => setPage("home")}
          >
            Home
          </button>
        </header>

        <main className="features">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div>
              <span className="badge">✓ HEALTH ID CREATED</span>

              <h1
                style={{
                  color: "#173e5c",
                  marginTop: "10px",
                }}
              >
                Welcome, {patient.name || "Patient"}
              </h1>

              <p
                style={{
                  color: "#687983",
                  marginTop: "10px",
                }}
              >
                Your health information is ready to be connected to your
                LYNEATH QR identity.
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card normal">
                <div className="feature-icon">📱</div>

                <h3>Your Health ID</h3>

                <p>
                  Your unique QR identity will allow doctors to securely
                  access your medical information.
                </p>

                <div
                  className="qr-pattern"
                  style={{
                    margin: "25px auto",
                  }}
                >
                  <div className="qr-corner top-left"></div>
                  <div className="qr-corner top-right"></div>
                  <div className="qr-corner bottom-left"></div>
                  <div className="qr-center">✚</div>
                </div>
              </div>

              <div className="feature-card emergency">
                <div className="feature-icon">🚑</div>

                <h3>Emergency Information</h3>

                <div className="feature-list">
                  <span>Blood Group</span>
                  <strong>{patient.bloodGroup || "Not added"}</strong>

                  <span>Allergies</span>
                  <strong>{patient.allergies || "None added"}</strong>

                  <span>Age</span>
                  <strong>{patient.age || "Not added"}</strong>
                  <span>Past Surgeries</span>
<strong>{patient.pastSurgeries || "None added"}</strong>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "25px",
                padding: "25px",
                background: "white",
                border: "1px solid #e0d9ce",
                borderRadius: "15px",
              }}
            >
              <h3 style={{ color: "#174a70" }}>
                📄 Medical Records
              </h3>

              <p
                style={{
                  color: "#71808a",
                  marginTop: "8px",
                }}
              >
                No medical reports uploaded yet.
              </p>

              <button
                className="secondary-btn"
                style={{ marginTop: "18px" }}
              >
                + Upload Medical Report
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">✚</span>
          LYNEATH
        </div>

        <div className="nav-right">
          <span>How it works</span>
          <span>About</span>

          <button className="login-btn">
            Login
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="badge">
              🔐 Secure Health Identity
            </div>

            <h1>
              Your health.
              <br />
              <span>One QR.</span>
            </h1>

            <p>
              LYNEATH brings your medical records together in one secure
              health identity. Share them with doctors in seconds or access
              critical information during an emergency.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => setPage("create")}
              >
                Create Health ID →
              </button>

              <button className="secondary-btn">
                Scan QR
              </button>
            </div>

            <div className="trust">
              <span>✓ Patient controlled</span>
              <span>✓ Secure access</span>
              <span>✓ Emergency ready</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <div>
                <small>LYNEATH HEALTH ID</small>
                <h3>Sample Patient</h3>
              </div>

              <span className="verified">✓</span>
            </div>

            <div className="qr-box">
              <div className="qr-pattern">
                <div className="qr-corner top-left"></div>
                <div className="qr-corner top-right"></div>
                <div className="qr-corner bottom-left"></div>
                <div className="qr-center">✚</div>
              </div>
            </div>

            <p className="scan-text">
              Scan to securely access health information
            </p>

            <div className="health-info">
              <div>
                <small>Blood Group</small>
                <strong>B+</strong>
              </div>

              <div>
                <small>Allergy</small>
                <strong>Penicillin</strong>
              </div>

              <div>
                <small>Condition</small>
                <strong>Diabetes</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="section-heading">
            <span>ONE ID. TWO WAYS TO PROTECT YOU.</span>

            <h2>Healthcare when you need it most.</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card emergency">
              <div className="feature-icon">🚑</div>

              <h3>Emergency Access</h3>

              <p>
                Verified healthcare staff can quickly access critical
                information when a patient cannot communicate.
              </p>

              <div className="feature-list">
                <span>✓ Blood group</span>
                <span>✓ Allergies</span>
                <span>✓ Medications</span>
                <span>✓ Conditions</span>
              </div>
            </div>

            <div className="feature-card normal">
              <div className="feature-icon">🏥</div>

              <h3>Normal Healthcare</h3>

              <p>
                Share your medical history and reports with your doctor
                instead of searching through emails and paper files.
              </p>

              <div className="feature-list">
                <span>✓ Medical reports</span>
                <span>✓ Prescriptions</span>
                <span>✓ History</span>
                <span>✓ AI summary</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-icon">✚</span>
          LYNEATH
        </div>

        <p>One QR. One Health Identity.</p>
      </footer>
    </div>
  );
}

export default App;
