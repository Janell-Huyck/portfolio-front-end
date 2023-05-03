import { Routes, Route } from 'react-router-dom';
import ResumePage from './pages/resume.page';
import Projects from './pages/projects.page';
import Blog from './pages/blog.page';
import Home from './pages/home.page';
import Navigation from './components/navigation.component';

import './App.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>

    </div>
  );
};

export default App;
