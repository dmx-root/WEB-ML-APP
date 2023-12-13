import { AuthMainView } from './views/authMainView';
import './style/App.css'
import {MainView} from './views/mainView'
import { SettingsView } from './views/settingsView';
import { UserProfileView } from './views/userProfileView';
import { ProductionReviseView } from './views/productionReviseView';

function App() {
  return (
    <div className="App">
      {/* <MainView/> */}
      {/* <AuthMainView/> */}
      <SettingsView/>
      {/* <UserProfileView/> */}
      {/* <ProductionReviseView/> */}
    </div>
  );
}

export default App;
