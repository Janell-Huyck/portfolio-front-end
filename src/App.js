import { Routes, Route } from 'react-router-dom';
import ResumePage from './pages/resume.page';
import Projects from './pages/projects.page';
import Blog from './pages/blog.page';
import Home from './pages/home/home.page';
import Contact from './pages/contact.page';
import Navigation from './components/navigation.component';
import { ViewportProvider } from './contexts/viewportProvider';

import './App.css';

const App = () => {
  return (
    <ViewportProvider>
      <main className="main">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>

      </main>
    </ViewportProvider>
  );
};

export default App;
