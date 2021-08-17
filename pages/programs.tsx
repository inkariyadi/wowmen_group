// Import Modules
import React from 'react';

// Import Components
import Navbar from 'components/Navbar';

 
const Programs: React.SFC = () => {
  return (
    <>
      <Navbar />
      <section className="program-first section-container">
        <div className="curcol-corner">
          <div className="circle-left" />
          <div className="circle-right" />
          <img className="sun-outlined" alt="decor" src="/images/programs/outlined_star_blue.png" />
          <img className="sun-filled" alt="decor" src="/images/programs/filled_star_orange.png" />
          <h1 className="curcol-corner-title">Wowmen</h1>
          <div className="curcol-corner-curcol-corner">
            <h2>Curcol</h2>
            <br />
            <h2>Corner</h2>
          </div>
        </div>
        <div className="curcol-corner-bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          </p>
          <div className="curcol-corner-join-btn">
            <div>Click Here <br /> to Join!</div>
          </div>
        </div>
      </section>
      <section className="program-second section-container">
        <div className="sisterhood-left">
          <img className="blue-bg" alt="blue-bg" src="/images/programs/blue-bg.png" />
          <img className="blue-bg-mobile" alt="blue-bg" src="/images/programs/blue-bg-mobile.png" />
          <div className="sisterhood-left-wrapper">
            <div className="sisterhood-left-head">
              <h2>Sisterhood</h2>
              <div className="program-text">
                <div className="trapezoid" />
                <h2>Program</h2>
              </div>
            </div>
            <p className="sisterhood-left-content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
            </p>
          </div>
        </div>
        <div className="sisterhood-right">
          <div className="list-of-positions">
            <span className="list-of-positions-text">List of Positions!</span>
            <img src="/images/shop/eyeball.png" alt="eyeball" className="eyeball" />
          </div>
          <div className="application">
            <div className="application-wrapper">
              <div className="application-head">
                for &nbsp;<span className="application-head-to"></span>
              </div>
              <div className="application-body">
                Application!
              </div>
            </div>
            <img src="/images/programs/eyeball-right.png" alt="eyeball" className="eyeball" />
          </div>
        </div>
      </section>
    </>
   
  );
};
 
export default Programs;