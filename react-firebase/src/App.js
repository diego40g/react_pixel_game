import { WebsiteList } from "./components/WebsiteList"
import { WebsiteForm } from "./components/WebsiteForm"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <h1>Titulo</h1>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<WebsiteList/>}/>
          <Route path="add" element={<WebsiteForm/>}/>
          <Route path="edit/:id" element={<WebsiteForm/>}/>
          <Route path="*" element={<h1>No encontrado</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
