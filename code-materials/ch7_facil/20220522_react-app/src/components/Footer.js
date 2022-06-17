import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src='https://ik.imagekit.io/tinpet/logo_kelas_jmjnsG_xu.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1653194381613' />
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className='footer-list'>
            <li>SERVICES</li>
            <li>SUPPORT</li>
            <li>CONNECT WITH US</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
