import React from 'react';
import contactList from './contact';
 
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-title">
          Contact
        </div>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/images/footer/logo-footer.png" alt="" />
          </div>
          <div className="footer-contact">
            {contactList.map((item, idx) => (
              <div className="contact" key={idx}>
                <div className="contact-subtitle">
                  {item.subtitle}
                </div>
                {item.value.map((val, i) => (     
                  <div key={i} className="contact-value">
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-limiter" />
      <div className="footer-bottom">
        All Right Reserved &#169; Wowmen Group 2021
      </div>
    </div>
  );
};
 
export default Footer;