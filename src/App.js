import "./App.css";
import Home from "./Components/Welcome/Home";
import { Route, Routes } from "react-router-dom";
import ListTodo from "./Components/MainComponents/ListTodo";

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/listToDo/:name" element={<ListTodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
