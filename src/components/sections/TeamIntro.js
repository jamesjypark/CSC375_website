import React from 'react';
import Image from '../elements/Image';

const TeamIntro = ({}) => {
  return (
    <div className="container">
      <h3 className="mt-0 mb-12">
        Team Members
      </h3>
      <div className="tiles-wrap center-content">

        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/profile1.jpg')}
                  alt="Features tile icon 01"
                  width={150}
                  height={150} />
              </div>
            </div>
            
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Cameron Drummond
              </h4>
              <p className="m-0 text-sm">
                VP, Customer Experience
                camdrum25665@gmail.com
              </p>
            </div>
          </div>
        </div>
      
        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/profile2.jpg')}
                  alt="Features tile icon 01"
                  width={150}
                  height={150} />
              </div>
            </div>
            
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                CangShi Gu 
              </h4>
              <p className="m-0 text-sm">
                VP, IT Systems
                gcshi0810@outlook.com
              </p>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/profile3.jpg')}
                  alt="Features tile icon 01"
                  width={150}
                  height={150} />
              </div>
            </div>
            
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Evan Woronuk
              </h4>
              <p className="m-0 text-sm">
                Solutions Architect
                woronuk.evan@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/profile1.jpg')}
                  alt="Features tile icon 01"
                  width={150}
                  height={150} />
              </div>
            </div>
            
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Sherry Zhang
              </h4>
              <p className="m-0 text-sm">
                Project Manager
                sherryzhang@uvic.ca
              </p>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/profile5.jpg')}
                  alt="Features tile icon 01"
                  width={150}
                  height={150} />
              </div>
            </div>
            
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                Sehee Park
              </h4>
              <p className="m-0 text-sm">
                Business Analyst
                sp12129001@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require('./../../assets/images/profile6.jpg')}
                  alt="Features tile icon 01"
                  width={150}
                  height={150} />
              </div>
            </div>
            
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                James Park
              </h4>
              <p className="m-0 text-sm">
                Project Manager
                james.park.victoria@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-0 mb-12">
        Point of Contact
      </h3>
      <p className="m-0">
        James Park - james.park.victoria@gmail.com
      </p>
    </div>
    );
}

export default TeamIntro;
