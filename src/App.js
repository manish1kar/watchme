import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';


function App() {
  return (
    <Provider store={appStore}>
      <div>
       <Header/>
       <Body/>
      </div>
    </Provider>  
  );
}

export default App;
