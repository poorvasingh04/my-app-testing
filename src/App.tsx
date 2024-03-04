import React, { ReactElement } from "react";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import FirstPage from "./FirstPage";
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
      <header className="App-header">
        <p>
          My app from webpack is now delivered successfully with customization
        </p>
        <p>This is customized webpack configuration using ts</p>
        <FirstPage />
      </header>
    </div>
  );
}

export default App;
