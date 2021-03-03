import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
