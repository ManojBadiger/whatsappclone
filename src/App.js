
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
function App() {
  return (
    //BEM nameing convention
    <div className="App">
   
    <div className='app_body'>
      {/* sidebar
      chat */}
      <Sidebar/>
      <Chat/>
      
    </div>
    </div>
  );
}

export default App;
