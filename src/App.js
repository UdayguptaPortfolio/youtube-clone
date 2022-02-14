import './App.css';
import Header from './component/header';
import RecommenderVideos from './component/recommendedVideos';
import Sidebar from './component/sidebar';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import SearchPage from './pages/searchPage';
import Trending from './pages/trending';
import YoutubePlayer from './pages/youtubePlayer';
import Register from './pages/register';
import Login from './pages/login';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  return (
    <div className="app">
      <ApolloProvider>
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
      <Route path="/register">
      <div className='app__page'>
              <Register/>
          </div>    
      </Route>
      <Route path="/login">
      <div className='app__page'>
              <Login/>
          </div>    
      </Route>
        </Switch>
      </Router>
     </ApolloProvider>
    </div>
  );
}

export default App;
