import React from "react";
import { useParams } from "react-router-dom";
import {Image} from '../Image'
import {data} from '../../data'
function ImageView() {
  let { id } = useParams();
  let image = data[parseInt(id, 10)];
  if (!image) return <div>Image not found</div>;
  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}
export {ImageView}