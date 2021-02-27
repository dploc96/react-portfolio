import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './portfolio';

function App() {
  return (
    <>
      <Header />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
