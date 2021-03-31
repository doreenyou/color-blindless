import React, { useState, useEffect } from 'react'
import { getFilteredImage } from '../common/colorblind';
// 可以使用 antd
// import { Select, Radio } from 'antd';

const APP = (props) => {
  const types = ['Normal','Protanopia','Protanomaly','Deuteranopia','Deuteranomaly','Tritanopia','Tritanomaly','Achromatopsia','Achromatomaly'];
  const [originImg, setOriginImg] = useState(null);
  const [colorBlindnessImgs, setColorBlindnessImgs] = useState({});

  useEffect(() => {
    window.postMessage('colorBlindness', '');
  }, [])

  // getPreviewImage must mount to window, because plugin will call getPreviewImage function
  window.getPreviewImage = (image) => {
    const img = new Image();
      img.onload = function () {
        setOriginImg(this);
      };
      img.src = image;
  }

  function draw(currentImage) {
    types.map(type => {
      const filterName = "simpl" + type;
      if (currentImage) {
        const imgUrl = getFilteredImage(currentImage, filterName );
        colorBlindnessImgs[type] = imgUrl;
        setColorBlindnessImgs(Object.assign({}, colorBlindnessImgs));
      }
    })
  }

  useEffect(() => {
    if (!originImg) return
    draw(originImg);
  }, [originImg])
  
  return (
    types.map(type => {
      return (
        <div className = 'container'>
          <div>{type}</div>
          { colorBlindnessImgs[type] && <img src={colorBlindnessImgs[type]} /> }
         </div>
      )
    })
  )
}

export default APP