import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Home from './Home';
import AllPosts from './Post'
import UploadPost from './Post/UploadPost'




function App() {

  let a = /^abcd/;
  const b = 'ab';
  const check = a.test(b);
  console.log("check: ", check);

  // const str = 'hello world!';
  // const result = /hell/.test(str);

  // console.log("check: ", result); // true

  return (
    <Router>
      <main className="App">
        <ul className='link'>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Post">Post</Link>
          <button>Logout</button>
        </ul>
        <Routes >
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Post" element={<AllPosts />} />
          <Route path="/Post/UploadPost" element={<UploadPost />} />
        </Routes>

      </main>
    </Router>


  );
}

export default App;