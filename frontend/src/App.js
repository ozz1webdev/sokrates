import './App.css';
import Homepage from './pages/home.jsx';
import Navbar from './components/navbar.jsx';
import Burgermenu from './components/burgermenu.jsx';

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
    <div className="App">
      <Burgermenu />
      <Navbar />

      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
