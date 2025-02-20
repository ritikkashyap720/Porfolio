import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="projects/:projectTitle" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
