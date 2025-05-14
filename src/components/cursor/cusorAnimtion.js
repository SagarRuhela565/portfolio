import React, { useState } from 'react';

const Cursor = () => {
  var parentCursor = document.getElementsByClassName('cursor-in'); 
 
  const [setcursorX, cursorX] = useState();
  const [setcursorY, cursorY] = useState();
  window.addEventListener('mousemove',(e)=>{
    cursorX(e.pageX);
    cursorY(e.pageY);
  });
  
  return (

    <>
     <div className='cursor-horving' style={{
      left: 'calc('+ setcursorX + 'px' + ' - var(--size)/2'  +')',
      top: 'calc('+ setcursorY +  'px' + ' - var(--size)/2' +')',
      // left: setcursorX + 'px',
      // top:  setcursorY +  'px',
     }}>
     </div>
    </>
  );
}

export default Cursor;