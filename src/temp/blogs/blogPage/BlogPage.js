// // ----- imports -----
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faClock,
//   faLongArrowAltLeft,
//   faEye,
// } from "@fortawesome/free-solid-svg-icons";

// // ----- pages -----

// // ----- components -----
// // import ColourWipe from "../ColourWipe";
// // import NavBar from "../components/NavBar";
// // import ContactSidebar from "../contact/ContactSidebar";

// // ----- util -----

// // ----- styles -----
// // import "../styles/Blogs.sass";

// // ----- images -----
// import placeholder from "../images/placeholder.png";

// function BlogPage() {
//   const { title } = useParams();

//   const [blog, setBlog] = useState([]);

//   const getBlogByTitle = (blogTitle) => {
//     axios
//       .get(
//         `https://60rpajrur6.execute-api.us-east-1.amazonaws.com/blogs/${blogTitle}`
//       )
//       .then((res) => {
//         setBlog(res.data);
//         updateViews(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const updateViews = (data) => {
//     axios
//       .put("https://60rpajrur6.execute-api.us-east-1.amazonaws.com/blogs", {
//         title: data.title,
//         date: data.date,
//         content: data.content,
//         time: data.time,
//         views: data.views + 1,
//       })
//       .then((res) => {})
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getBlogByTitle(title);
//   }, [title]);

//   return (
//     <>
//       {/* <ColourWipe />
//       <NavBar />
//       <ContactSidebar /> */}

//       <div className="blogs-container">
//         <Link to="/blogs" className="blogs-back">
//           <FontAwesomeIcon icon={faLongArrowAltLeft} className="back-arrow" />
//           Back to blogs
//         </Link>

//         <div className="blogs-banner-container">
//           <img src={placeholder} className="banner-img" alt="blog banner" />
//         </div>

//         {blog.title && blog.date ? (
//           <>
//             <h1 className="banner-title">
//               {blog.title
//                 .replace("-", " ")
//                 .split(" ")
//                 .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//                 .join(" ")}
//             </h1>
//             <div className="subtitle-container">
//               <div className="subtitle-left">
//                 <p className="subtitle-date">
//                   {new Date(blog.date).toDateString()}
//                 </p>
//                 <p className="subtitle-break">/</p>
//                 <FontAwesomeIcon icon={faClock} className="subtitle-icon" />
//                 <p className="subtitle-time">{blog.time} min. read</p>
//                 <p className="subtitle-break">/</p>
//                 <FontAwesomeIcon icon={faEye} className="subtitle-icon" />
//                 <p className="subtitle-view">{blog.views} views</p>
//               </div>

//               <div className="subtitle-right">Written by Keaton Lees</div>
//             </div>
//           </>
//         ) : (
//           "Loading..."
//         )}

//         {blog.content ? (
//           <div className="content-container">{blog.content}</div>
//         ) : (
//           "Loading..."
//         )}
//       </div>
//     </>
//   );
// }

// export default BlogPage;
