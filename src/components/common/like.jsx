import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <div className="bg-image hover-zoom">
      <i
        onClick={props.onClick}
        className={classes}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Like;
