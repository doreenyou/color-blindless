import React, { useState, useEffect, useRef } from 'react'
import { getFilteredImage } from '../common/colorblind';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

// 可以使用 antd
// import { Select, Radio } from 'antd';

const APP = (props) => {
  const imgElementRef = useRef(null);
  const types = ['Normal','Protanopia','Protanomaly','Deuteranopia','Deuteranomaly','Tritanopia','Tritanomaly','Achromatopsia','Achromatomaly'];
  const typesCN = ['原图','红色色盲','红色色弱','绿色色盲','绿色色弱','蓝色色盲','蓝色色弱','全色盲','蓝椎体细胞色盲'];
  const [originImg, setOriginImg] = useState(null);
  const [colorBlindnessImgs, setColorBlindnessImgs] = useState({});

  const columns = types.map((type, index) => {
    return {
      key: type,
      title: type + ' ' + typesCN[index],
      dataIndex: type,
      render: (type) => <img src={type} width="100%" alt="" ref={imgElementRef}/> 
    }
  })

  useEffect(() => {
    window.postMessage('colorBlindness', '');
  }, [])

  useEffect(() => {

    const debounce = (fn) => {
      let timer;
      return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(fn, 200);
      }
    }

    const handleResize = debounce(() => {
      const containerWidth = imgElementRef.current.clientWidth;
      draw(originImg, containerWidth);
    })

    window.addEventListener('resize', handleResize, false);

    return () => { // useEffect卸载时解绑
      window.removeEventListener('resize', handleResize);
    }
  }, [originImg])

  // getPreviewImage must mount to window, because plugin will call getPreviewImage function
  window.getPreviewImage = (image) => {
    const img = new Image();
      img.onload = function () {
        setOriginImg(this);
      };
      img.src = image;
  }

  function draw(originImg, containerWidth = 150) {
    types.map(type => {
      const filterName = "simpl" + type;
      if (originImg) {
        const imgUrl = getFilteredImage(originImg, filterName, containerWidth);
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
    <Table columns={columns} dataSource = {[colorBlindnessImgs]} pagination={false} />  
  )
}

export default APP