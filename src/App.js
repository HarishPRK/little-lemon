import './App.css';
import Header from './Header'; // Nav is now rendered inside Header
// import Nav from './Nav'; // Remove Nav import
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <Nav /> Remove Nav rendering */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
