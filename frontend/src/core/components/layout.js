import React from "react";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  content,
}) => (
  <div>
    <div className="jumbotron">
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{content}</div>
  </div>
);

export default Layout;
