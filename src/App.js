import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home"
import Post from "./components/Post/Post"
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
      <Router>
        <p><Link  to={"/home"}>Home</Link></p>

       <p> <Link to={"/home"}>Home2</Link></p>

        <p><Link  to={"/asd"}>Not Found</Link></p>

        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>

          <Route path="/about">
           <Post></Post>
          </Route>

          <Route path="/home">
            <Home></Home>

          </Route>

          <Route path="/posts/:id">
           <PostDetail></PostDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>

  );
}

export default App;
