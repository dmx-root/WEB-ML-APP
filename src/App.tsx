import { AuthMainView } from './views/authMainView';
import './style/App.css'
import {MainView} from './views/mainView'
import { SettingsView } from './views/settingsView';
import { UserProfileView } from './views/userProfileView';

function App() {
  return (
    <div className="App">
      <MainView/>
      {/* <AuthMainView/> */}
      {/* <SettingsView/> */}
      {/* <UserProfileView/> */}
    </div>
  );
}

export default App;
