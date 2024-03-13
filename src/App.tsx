import React, { ReactElement } from "react";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomComponent from "./components/bootstrap/Components";
import Home from "./components/Home";
import "./App.css";

function App(): ReactElement<React.FC> {
  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
      appId: process.env.REACT_APP_FIREBASE_APPID,
    };

    initializeApp(firebaseConfig);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/component" Component={CustomComponent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
