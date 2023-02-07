import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const HomePage = () => {
 
  return (
    <div className="home-page">
        <div className='about'>
            <h1 className='about-us'> About Us</h1>
            <p className='about-us-para'>GlobalOne is tremendously proud of the impact that we have made in helping </p>
            <p className='about-us-para'>students by providing quality trainings, Internships and Placements</p>
        </div>
     <div className='details'>
        <div className='history'>
        <h1 className='history-head'>History</h1>
        <p className='sub'>We have started our Journey in the year 2016 with a motto to fill the gap between the institute and the Industry. We have reached 80k+ students in training Technical and Non-Technical courses in the Market and still counting…</p>
        </div>
        <div className='staff'>
     <h1 className='history-head'>Experienced Staff</h1>
     <p className='sub'>The trainers at GlobalOne work as a team to exceed each of your expectations. We have a combined 60+ years of high-level education experience, helping students be successful in today’s world. Have questions? Come meet us!</p>

</div>
    


     </div> <div className='kid'><img alt='kid' className='boy' src='https://globaloneservices.co.in/wp-content/uploads/2022/10/image-5.jpg'/></div>
          <div className='contact-details'>
        <div className='contact'>
           <h1 className='head'>Contact</h1> 
           <p className='contact-para'>Office: (040) 66- 888-666</p>
           <p className='contact-para'>info@globaloneservices.com</p>
        </div >
        <div className='contact'>
           <h1 className='head'>Location</h1> 
           <p className='contact-para'>7-1-58,404 B , 4th floor, Surekha Chambers,</p>
           <p className='contact-para'>Ameerpet, Hyderabad, Telangana – 500016</p>
        </div>
        <div className='contact'>
          <h1 className='head'>Connect</h1>
          <a className="social"href='https://twitter.com/'>Twitter</a>
          <br></br>
          <a className='social' href='https://www.facebook.com/'>Facebook</a>
        </div>
        </div>
   
        <footer className="footer-container">
         <div className='both'>
      <div className="links-container">
        <Link to="/" className="link">Home</Link>
        <Link to="/" className="link">About Us</Link>
      
        <Link to="/" className="link">Contact</Link>
        <Link to="/" className="link">Our Clients</Link>
      </div>
      
      <div className="social-links-container">
        <a href="/" className="social-link">Facebook</a>
        <a href="/" className="social-link">Twitter</a>
        <a href="/" className="social-link">Instagram</a>
      </div>
      </div>
      <div className="copyright-container">
        <div className="copyright">&copy; 2023 GlobalOne Services</div>
      </div>
    </footer>


    </div>
  );
};

export default HomePage;      
