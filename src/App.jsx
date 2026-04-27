import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the basic React setup.</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>This is the routing verification page.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
