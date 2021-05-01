import React from "react";

function Image(props) {
  return (
    <div className="images_item">
      <img src={props.image.url} alt="" />
    </div>
  );
}

export default Image;
