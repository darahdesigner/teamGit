import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Img = styled.img`
height: 500px;
width: 500px;
border-radius: 10px;
margin-left: 80px;
margin-top: -60px;
`;

const NasaApi = (props) => {
  const [img, setImg] = useState('');
  
  const cutLat = Math.trunc(props.lat);
  const cutLng = Math.trunc(props.lng);


  const handleClick = () => {
    fetch(
      `https://api.nasa.gov/planetary/earth/imagery?lon=${cutLng}&lat=${cutLat}&date=2015-01-01&dim=0.029&api_key=XjDwTy9JRKOkYRTTsWLgPrhnNGiraiBN3ACDUQyo`
    )
      .then((res) => res)
      .then((res) => {
        console.log(res);
        setImg(res.url);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=> {
    handleClick();
  },[])

  return (
    <div>
      <Img className="satImg" src={img} ></Img>
    </div>
  );
};

export default NasaApi;