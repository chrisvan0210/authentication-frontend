import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import UploadPost from './UploadPost';

const AllPosts =() =>{
  return (
    <div>
      <h2>
        Post page
      </h2>
      <Link to="/Post/UploadPost">Upload</Link>
     
      <img alt="not fount" width={"250px"} src="http://localhost:2000/upload/1647832572091-icon-html.png" />
    </div>
  )
}

export default AllPosts