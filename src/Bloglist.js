import React from "react";

const Bloglist = ({ blog, author }) => {
  // console.log(blog);
  return (
    <div>
      <h1>{author}</h1>
      {blog.map((item) => (
        <div key={item.id} className="blogDiv">
          <h3>{item.title}</h3>
          <i>Author is: {item.author}</i>
          <p>{item.description}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
