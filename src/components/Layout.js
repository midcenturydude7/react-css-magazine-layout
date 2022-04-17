import React from 'react';

const Layout = () => {
  return (
    <>    
      <div className='header-container'>
        <div className='header-inside'>
          [TITLE]
        </div>
      </div>
      <div className='grid-container-right'>
        <div className='grid-item-right'>BOX 1</div>
        <div className='grid-item-right'>BOX 2</div>
        <div className='grid-item-right'>BOX 3</div>
        <div className='grid-item-right'>BOX 4</div>
        <div className='grid-item-right'>BOX 5</div>
      </div>
      <div className='grid-container-left'>
        <div className='grid-item-left'>BOX 1</div>
        <div className='grid-item-left'>BOX 2</div>
        <div className='grid-item-left'>BOX 3</div>
        <div className='grid-item-left'>BOX 4</div>
        <div className='grid-item-left'>BOX 5</div>
      </div>
      <div className='grid-container-right'>
        <div className='grid-item-right'>BOX 1</div>
        <div className='grid-item-right'>BOX 2</div>
        <div className='grid-item-right'>BOX 3</div>
        <div className='grid-item-right'>BOX 4</div>
        <div className='grid-item-right'>BOX 5</div>
      </div>
    </>
  );
}

export default Layout;