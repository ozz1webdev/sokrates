import './App.css';
import Homepage from './pages/home.jsx';
import Navbar from './components/navbar.jsx';
import Burgermenu from './components/burgermenu.jsx';
import LoginPage from './pages/auth/login.jsx';
import RegisterPage from './pages/auth/register.jsx';
import ContactPage from './pages/contact.jsx';
import PostsPage from './pages/posts.jsx';
import HomePage from './pages/home.jsx';
import Footer from './pages/footer.jsx';
import TermsPage from './pages/terms.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster} from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Burgermenu />
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-left" reverseOrder={false} />
        <Layout>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>

        </Layout>

      </div>
    </Router>
  );
}

export default App;
