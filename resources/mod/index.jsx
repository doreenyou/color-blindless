import React, { useState, useEffect } from 'react'
import { getFilteredImage } from '../common/colorblind';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
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
   
    <div className = 'container'>
      <Table>
        <thead>
          <tr>
            { 
              types.map((type, index) => {
                return <Th key={index}>{type}</Th>
              })
            }
          </tr>
        </thead>
        <Tbody>
          <Tr>
            { 
              types.map((type, index) => {
                return <Td key={index}>{colorBlindnessImgs[type] && <img src={colorBlindnessImgs[type]} /> }</Td>
              })
            }
          </Tr>
        </Tbody>
      </Table>
      </div>
  
  )
}

export default APP