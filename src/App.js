import './App.css';
import Header from './component/Header';
import RecommenderVideos from './component/RecommenderVideos';
import Sidebar from './component/Sidebar';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import SearchPage from './component/SearchPage';
import Trending from './component/Trending';
import YoutubePlayer from './component/YoutubePlayer';

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
           <Route path="/search/:searchTerm">
            <div className='app__page'>
              <Sidebar/>
              <SearchPage/>
              </div>
             </Route>
           <Route exact path="/">
            <div className='app__page'>
              <Sidebar/>
              <RecommenderVideos/>
              </div>
      </Route>
      <Route path="/trending">
      <div className='app__page'>
              <Sidebar/>
              <Trending/>
          </div>    
      </Route>
      <Route path="/video/:videoTerm">
      <div className='app__page'>
              <YoutubePlayer/>
          </div>    
      </Route>
        </Switch>
      </Router>
      {/* <Header/>
      <div className='app__page'>
      <Sidebar/>
      <RecommenderVideos/>
      </div> */}
     
    </div>
  );
}

export default App;
