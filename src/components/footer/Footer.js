import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Company Logo" />
          <span>RoomSpace</span>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com">
            <FacebookIcon/>
          </a>
          <a href="https://linkedin.com">
            <LinkedInIcon/>
          </a>
          <a href="https://instagram.com">
            <InstagramIcon/>
          </a>
          <a href="https://twitter.com">
            <TwitterIcon/>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <a className='text-dark' href='http://localhost:3000/'>
          RoomSpace.com
        </a>. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
