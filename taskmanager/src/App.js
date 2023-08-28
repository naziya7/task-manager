// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/logIn/LogIn';
import SignUp from './components/signUp/signup';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/register" element={<SignUp/>}/>
          {/* <Route path="/contacts" element={<Table />} /> */}
        </Routes>
  
    </div>
  );
}

export default App;
