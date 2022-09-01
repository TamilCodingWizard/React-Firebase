import React from "react";
import "./Postdetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "./../../hooks/useFetch";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";
import { useFirestore } from "./../../hooks/useFirestore";
import { useAuthContext } from "./../../hooks/useAuthContext";

export default function Postdetail() {
  const location = useLocation();

  const { state: post } = location;

  const { user } = useAuthContext();

  const { deleteDocument } = useFirestore("posts");

  //const { data } = []

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${post.id}`, { state: post });
  };

  const handleDelete = () => {
    deleteDocument(post.id);
    navigate("/");
  };

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        {/* {data.length !== 0 && (
          <div className="alert alert-success" role="alert">
            Post Deleted Successfully!
          </div>
        )} */}

        {(user.uid === post.userId) ? <>
          <div className="float-end">
            <Appsubmitbutton onClick={handleDelete} title="Delete" />
            <div className="float-end"></div>
            <Appsubmitbutton onClick={handleEdit} title="Edit" />
          </div>
        </> : <></>}
      </div>
    </div>
  );
}
