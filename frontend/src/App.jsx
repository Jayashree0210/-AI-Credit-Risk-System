import { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    month_duration: "",
    credit_amount: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      formData
    );

    setResult(response.data.prediction);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>AI Credit Risk Assessment</h1>

      <input
        type="number"
        name="month_duration"
        placeholder="Month Duration"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="credit_amount"
        placeholder="Credit Amount"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Predict Risk
      </button>

      <h2>{result}</h2>

    </div>
  );
}

export default App;