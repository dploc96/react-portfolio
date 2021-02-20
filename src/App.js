import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BirthdayReminder from './birthdayReminder';
import Footer from './common/footer';
import Header from './common/header';
import Portfolio from './portfolio';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/birthday-reminder" component={BirthdayReminder} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
