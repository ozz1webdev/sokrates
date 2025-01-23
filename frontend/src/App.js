import './App.css';
import Homepage from './pages/home.jsx';
import Navbar from './components/navbar.jsx';
import Burgermenu from './components/burgermenu.jsx';
import LoginPage from './pages/auth/login.jsx';
import RegisterPage from './pages/auth/register.jsx';
import ContactPage from './pages/contact.jsx';
import PostsPage from './pages/posts.jsx';
import HomePage from './pages/home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Header</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Burgermenu />
        <Navbar />

        <Layout>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>

        </Layout>

      </div>
    </Router>
  );
}

export default App;
