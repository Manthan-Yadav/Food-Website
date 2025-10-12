import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' data-aos="fade-up">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='flogo' src={assets.logo} alt="" />
          <p>Welcome to Half Fried – where hunger meets a little chaos and a lot of flavor.

We’re not your average food delivery service. We believe food should be fun, fast, and sometimes... just Half Fried 😎. Born from midnight cravings and random thoughts like “What if fries had feelings?” — our goal is simple</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91702-432-6355</li>
            <li>contact@HalfFried.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Hackthon - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
