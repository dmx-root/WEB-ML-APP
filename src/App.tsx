import { AuthMainView } from './views/authMainView';
import './style/App.css'
import {MainView} from './views/mainView'
import { SettingsView } from './views/settingsView';

function App() {
  return (
    <div className="App">
      {/* <MainView/> */}
      {/* <AuthMainView/> */}
      <SettingsView/>
    </div>
  );
}

export default App;
