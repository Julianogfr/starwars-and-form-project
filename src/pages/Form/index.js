import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "./index.css";
import { apiPost } from "../../service";

function Form() {
  const [post, setPost] = useState({
    name: "",
    age: null,
    profession: "",
  });

  const [data, setData] = useState();

  const Post = async (event) => {
    event.preventDefault();
    try {
      setData(await apiPost(post));
      console.log(data);
    } catch (error) {}
  };

  const updateField = (value, name) => {
    let formApi = {};
    formApi[name] = value;
    formApi = Object.assign(post, formApi);
    console.log(formApi);
    setPost(formApi);
  };

  return (
    <div className="container-form">
      <h2 className="form-h2">Form</h2>

      <form method="post" className="form-form">
        <label className="label-form-name">
          <p>
            Name:{" "}
            <input
              type="text"
              onChange={(event) => {
                updateField(event.target.value, "name");
              }}
              name="name"
            />
          </p>
        </label>
        <label className="label-form-age">
          <p>
            Age:{" "}
            <input
              type="number"
              onChange={(event) => {
                updateField(event.target.value, "age");
              }}
              name="age"
            />
          </p>
        </label>
        <label className="label-form-profession">
          <p>
            Profession:{" "}
            <input
              type="text"
              onChange={(event) => {
                updateField(event.target.value, "profession");
              }}
              name="profession"
            />
          </p>
        </label>
        <button className="send-form-button" onClick={Post}>
          send
        </button>
      </form>
      <div className="div-buttons-link-formstar">
        <Link to="/">
          <button className="homeandstar-button-formpage">Home</button>
        </Link>
        <Link to="/starwars">
          <button className="homeandstar-button-formpage">Star Wars</button>
        </Link>
      </div>
      <div className="stars"></div>
    </div>
  );
}

export default Form;
