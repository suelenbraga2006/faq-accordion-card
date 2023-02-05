import React from 'react';

import './styles.scss';

import womanMobile from '../../assets/images/illustration-woman-online-mobile.svg';
import womanDesktop from '../../assets/images/illustration-woman-online-desktop.svg';
import boxDesktop from '../../assets/images/illustration-box-desktop.svg';

function Images() {
  return (
    <>
      <img src={boxDesktop} alt="Box" className="boxdesktop" />
      <div className="images">
        <img src={womanMobile} alt="Woman Online" className="mobile" />
        <img src={womanDesktop} alt="Woman Online" className="womandesktop" />
      </div>
    </>
  );
}

export default Images;
