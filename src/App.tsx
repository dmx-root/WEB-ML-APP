import './style/App.css'
import { LoginView } from './views/loginView';
import {MainView} from './views/mainView'

function App() {
  return (
    <div className="App">
      {/* <MainView/> */}
      <LoginView/>
    </div>
  );
}

export default App;
