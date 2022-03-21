import React, { useState } from "react";
import axios from "axios";




const UploadPost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [filename, setFilename] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onChangeFile = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const onChangeContent = (event) => {
    setContent(event.target.value);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("contents", content);
    console.log("form", formData)
    try {
      const res = await axios({
        method:'POST',
        url: 'http://localhost:2000/api/add-news',
        data : formData,
        withCredentials: true
      })
      // const res = await axios.post("http://localhost:2000/api/add-news", formData);
      console.log("jjjjjjj",res)
      const { fileName, filePath } = res.data;
      
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.log(err)
    }
  }
  console.log(file)
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {file && (
        <div>
          <img alt="not fount" width={"250px"} src={file.name} />
          <br />
          <button onClick={() => setFile(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="myImage"> {filename}</label>
        <input
          type="file"
          name="myImage"
          onChange={onChangeFile}
        />
         <label htmlFor="title"> Title</label>
        <input 
         type="text"
         name="title"
         onChange={onChangeTitle}
        />
         <label htmlFor="content"> Content</label>
        <textarea
         type="text"
         name="content"
         onChange={onChangeContent}
        />
        <button type="submit" >Upload</button>
      </form>

    </div>
  );
};

export default UploadPost;