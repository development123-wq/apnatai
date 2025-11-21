import React from 'react';
import { useRouter } from 'next/router';  
import '../../public/css/innerbannerabout.css';

const AboutCommitment = () => {
  
  return (
    <section className="inner-banner-new">
      <div className="banner-overlay" style={{paddingTop:'80px'}}>
        <h1 className="banner-title">Our commitment to Natai</h1>
        <p style={{color:'#ffffff',textAlign:'center',width:'700px',margin:'auto',marginTop:'0px'}}>AP Natai is more than just a business; we are an integral part of the Natai community. Our commitment extends beyond property services to contributing positively to the environment and the local culture. We engage in practices that not only enhance the value of Natai properties but also preserve the unique charm of this exquisite region.</p>
        
      </div>
    </section>
  );
};

export default AboutCommitment;
