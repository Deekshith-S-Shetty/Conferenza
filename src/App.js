import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>This is Home page</h1>} />
        <Route path="/about" element={<h1>This is About page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
