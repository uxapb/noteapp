import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home.js'
import {About} from './pages/About.js'
import {Navbar} from './components/navbar'
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/Firebase/FirebaseState';


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <HashRouter>          
          <Navbar />    
          <Alert/>      
          <div className="container">
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </HashRouter> 
      </AlertState>  
    </FirebaseState>
  );
}

export default App;
