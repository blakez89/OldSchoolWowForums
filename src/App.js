import React from 'react';

import wow1 from './images/wow1.jpg'
import wow2 from './images/wow2.jpg'
import wow3 from './images/wow3.jpg'
import wow4 from './images/wow4.jpg'
import {default as IC} from './Testing/ImageCarousel'
import {PostGrid} from './Forum/PostGrid'

export default function App() {

  const myimages = [wow1,wow2,wow3,wow4]
  const c = "im the caption"

  return (
    
   
    <PostGrid/>
    /* <IC images={myimages} caption={c}/> */
  
  
  );
}