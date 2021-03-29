import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import JumbotronComponent from "./components/Jumbotron"
import NavbarComponent from "./components/Navbar"
import Projects from "./components/Projects"
import "./App.css"
import ContactMe from "./components/ContactMe"

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
