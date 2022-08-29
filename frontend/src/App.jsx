import "./App.css";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
