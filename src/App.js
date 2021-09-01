import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Download from './pages/download'
import './styles/globals.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/app-download">
            <Download />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  ) 
};

export default App;
