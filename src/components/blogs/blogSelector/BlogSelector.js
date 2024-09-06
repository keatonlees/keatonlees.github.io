// ----- imports -----
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faClock,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

// ----- pages -----

// ----- components -----

// ----- util -----

// ----- styles -----

// ----- images -----
import placeholder from "../images/placeholder.png";

function BlogSelector() {
  //   const [title, setTitle] = useState("title-2");
  //   const [content, setCotent] = useState("content-2");
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = () => {
    axios
      .get("https://60rpajrur6.execute-api.us-east-1.amazonaws.com/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      {/* <button onClick={submit}>Submit</button> */}
      <div className="blog-tiles">
        {blogs.length > 0 ? (
          blogs.map((item, i) => {
            const titleSpaces = item.title.replace("-", " ");
            const title = titleSpaces
              .split(" ")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
            const date = new Date(item.date).toDateString();

            return (
              <div key={i} className="blog-tile">
                <div className="tile-img-container">
                  <img className="tile-img" src={placeholder} alt="tile-img" />
                </div>
                <div className="tile-text">
                  <p className="tile-date">{date}</p>
                  <h1 className="tile-title">{title}</h1>
                  <div className="tile-link-container">
                    <div className="tile-stats">
                      <FontAwesomeIcon icon={faClock} className="tile-icon" />
                      <p className="tile-time">{item.time}</p>
                      <FontAwesomeIcon icon={faEye} className="tile-icon" />
                      <p className="tile-views">{item.views}</p>
                    </div>
                    <Link to={`/blogs/${item.title}`} className="tile-link">
                      Read
                      <FontAwesomeIcon
                        icon={faLongArrowAltRight}
                        className="link-arrow"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>LOADING...</div>
        )}
      </div>
    </>
  );
}

export default BlogSelector;
