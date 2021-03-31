import React, { useState, useEffect } from 'react'
import { getFilteredImage } from '../common/colorblind';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import '../../src/SuperResponsiveTableStyle.css';
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
          <table key={i}>
            <thead>
              <tr>
                <Th>{type[0]}</Th>
                <Th>{type[1]}</Th>
                <Th>{type[2]}</Th>
                <Th>{type[3]}</Th>
                <Th>{type[4]}</Th>
                <Th>{type[5]}</Th>
                <Th>{type[6]}</Th>
                <Th>{type[7]}</Th>
                <Th>{type[8]}</Th>
              </tr>
            </thead>
            <Tbody>
              <Tr>
                <Td>{ colorBlindnessImgs[type[0]] && <img src={colorBlindnessImgs[type[0]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[1]] && <img src={colorBlindnessImgs[type[1]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[2]] && <img src={colorBlindnessImgs[type[2]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[3]] && <img src={colorBlindnessImgs[type[3]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[4]] && <img src={colorBlindnessImgs[type[4]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[5]] && <img src={colorBlindnessImgs[type[5]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[6]] && <img src={colorBlindnessImgs[type[6]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[7]] && <img src={colorBlindnessImgs[type[7]]} /> }</Td>
                <Td>{ colorBlindnessImgs[type[8]] && <img src={colorBlindnessImgs[type[8]]} /> }</Td>
              </Tr>
            </Tbody>
          </Table>
         </div>
      )
    })
  )
}

export default APP