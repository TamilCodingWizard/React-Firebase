import React from "react";
import "./Createpost.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";
import { useFirestore } from './../../hooks/useFirestore';


export default function Createpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate()
  
  //const {data} = []

  const {addDocument,error} = useFirestore('posts')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title) {
      setValidationError("Title should not be empty");
      return
    }
    if (!content) {
      setValidationError("Content should not be empty");
      return
    }
    setValidationError("");
    console.log({ title, body: content, userId:1});

    addDocument({ title, body: content, userId:1})
    navigate('/')
  };

  
  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h6>Title:</h6>
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}
        {/* {
          data.length !== 0 && <div className="alert alert-success" role="alert">
            Post Created Successfully!
          </div>
        } */}
        {
          error && <div className="alert alert-danger" role="alert">
            {error}
        </div>
        }
        <div className="float-end">
          <Appsubmitbutton title="Create"/>
        </div>
      </form>
    </div>
  );
}
