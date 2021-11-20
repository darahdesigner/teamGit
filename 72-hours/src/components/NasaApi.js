import React, { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
height: 600px;
width: 600px;
border-radius: 10px;
`;

const NasaApi = (props) => {
  const [img, setImg] = useState("");
  const cutLat = Math.trunc(props.lat);
  const cutLng = Math.trunc(props.lng);

  const handleClick = () => {
    fetch(
      `https://api.nasa.gov/planetary/earth/imagery?lon=${cutLng}&lat=${cutLat}&date=2014-01-01&dim=0.029&api_key=XjDwTy9JRKOkYRTTsWLgPrhnNGiraiBN3ACDUQyo`
    )
      .then((res) => res)
      .then((res) => {
        console.log(res);
        setImg(res.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <Img className="satImg" src={img} alt="location"></Img>
    </div>
  );
};

export default NasaApi;