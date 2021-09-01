import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Download from './pages/download';
import './styles/global.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Download />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  ) 
};

export default App;
