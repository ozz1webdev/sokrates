import './App.css';
import Homepage from './pages/home.jsx';
import Navbar from './components/navbar.jsx';
import Burgermenu from './components/burgermenu.jsx';
import LoginPage from './pages/auth/login.jsx';
import LogoutPage from './pages/auth/logout.jsx';
import RegisterPage from './pages/auth/register.jsx';
import ContactPage from './pages/contact.jsx';
import PostsPage from './pages/posts.jsx';
import HomePage from './pages/home.jsx';
import Footer from './pages/footer.jsx';
import TermsPage from './pages/terms.jsx';
import UserProfile from './pages/userProfile.jsx';
import AdminPage from './pages/adminpage.jsx';
import TeacherPage from './pages/teacherpage.jsx';
import StudentPage from './pages/studentpage.jsx';
import CreatePost from './pages/createPost.jsx';
import EditPost from './pages/editpost.jsx';
import PostDetail from './pages/postdetail.jsx';
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
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/teacherpage" element={<TeacherPage />} />
            <Route path="/studentpage" element={<StudentPage />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/editpost/:id" element={<EditPost />} />
            <Route path="/postdetail/:id" element={<PostDetail />} />
          </Routes>

        </Layout>

      </div>
    </Router>
  );
}

export default App;
