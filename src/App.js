import './App.css';
import Header from './component/Header';
import RecommenderVideos from './component/RecommenderVideos';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app__page'>
      <Sidebar/>
      <RecommenderVideos/>
      </div>
     
    </div>
  );
}

export default App;
