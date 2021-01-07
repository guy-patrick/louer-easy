import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import Results from './pages/Results';
import { NotFoundPage } from './pages/NotFoundPage'
import './App.scss';

export const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/results' component={Results} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </div>
)
