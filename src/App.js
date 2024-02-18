import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9WcbEUlG-f2wmmMNoeaSfSzZFJN3DdIM",
  authDomain: "my-app-e6ecd.firebaseapp.com",
  projectId: "my-app-e6ecd",
  storageBucket: "my-app-e6ecd.appspot.com",
  messagingSenderId: "254101470394",
  appId: "1:254101470394:web:e58ff669b5f998a00c9683"
};
initializeApp(firebaseConfig);

function App() {
  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my project my-app. Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
