import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  
  const [advice, setAdvice] = useState({ slip: { advice: "..." } })
  
    const fetchAdvice = async () => {
    
    const url = "https://api.adviceslip.com/advice";
    
    const request = {
      method: "GET"
    }

    const response = await fetch(url, request);

    if (response.ok) {
      const data = await response.json()
      setAdvice(data)
      
    } else {
      console.log("Error", response.status, response.statusText)
    }
  };

  useEffect (() => {
    fetchAdvice()
  }, []);

  const handleUpdate = () => {
    fetchAdvice();
  };

  return (
    <div className="App">
      
      {advice.slip.advice && (
        <>
          <h4>Advice {advice.slip.id}</h4>
          <h3>{advice.slip.advice}</h3>
        </>
      )} 

      <div className="div-separator">
        <div className="separator"></div>
        <i className="fa-solid fa-pause"></i>
        <div className="separator"></div>
      </div>
      
      <i className="update fa-solid fa-rotate-right" onClick={handleUpdate}></i>
      
    </div>
  );
}

export default App;
