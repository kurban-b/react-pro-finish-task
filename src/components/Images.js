import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Images() {
  const images = useSelector((state) => state.images.items);
  const loading = useSelector((state) => state.images.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="images">
      {images.map((img, i) => {
        return (
          <Link to={`/modal/${img.id}`} key={i}>
            <Image key={i} image={img} />
          </Link>
        );
      })}
    </div>
  );
}

export default Images;
