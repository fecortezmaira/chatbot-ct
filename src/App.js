import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => handleOnIdentify(), 1000);
  }, []);

  const handleOnIdentify = () => {
    if (!window.$ct) return null;

    const user = {
      uuid: "123",
      code: "123",
      name: "John Doe",
      email: "johndoe@example.cl",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      phone: "+123456789",
      role: "Admin",
      department: "IT",
      division: "Software",
    };

    return window.$ct.chatbot.identify(user);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
