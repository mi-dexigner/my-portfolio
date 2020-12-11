import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
       <Route exact component={Home} path='/' /> 
       <Route exact component={About} path='/about' /> 
       <Route exact component={SinglePost} path='/post/:slug' /> 
       <Route exact component={Post} path='/post' /> 
       <Route exact component={Project} path='/project' /> 
      </Switch>
    </Router>
  );
}

export default App;
