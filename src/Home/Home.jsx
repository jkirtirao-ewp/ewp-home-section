/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'

import Banner1 from './assets/digital-marketing-banner.webp'
import Banner2 from './assets/seo-analytics-banner.webp'
import Banner3 from './assets/web-design-banner.webp'
import Banner4 from './assets/Banner4.png'
import Banner5 from './assets/Banner5.jpg'
import img1 from './assets/Digital-Marketing-Banner.png'
import img2 from './assets/Mobile-Apps-Banner.png'
import img3 from './assets/Website-Designing-Banner.png'
import arrow from './assets/icon-arrow-right.png'

const Home = () => {
    return (
        <div className="container">
            <h1 className='main-heading'>We Provide Better Service for Your Business</h1>
            <div className="heading">
                <h1>YOUR DIGITAL PARTNER...!</h1>
                <h2>Top Web Consultants in Pune, India</h2>
            </div>
            <div className="displayImg">
                <img src={Banner1} alt="" className='banner1'/>
                <img src={Banner2} alt="" className='banner2'/>
                <img src={Banner3} alt="" className='banner3'/>
                <img src={Banner4} alt="" className='banner4'/>
                <img src={Banner5} alt="" className='banner5'/>
            </div>
            <div className="content">
                <div className="service">
                    <div>
                        <img src={img3} alt="" />
                        <h1>Website Designing</h1>
                    </div>
                    <h4>Best Web Design Company in India with talented in-house UI/UX web designers & developers in Pune</h4>
                    <img src={arrow} alt="" />
                </div>

                <div className="service">
                    <div>
                        <img src={img2} alt="" />
                        <h1>Mobile Apps</h1>
                    </div>
                    <h4>Award winning agency offering mobile app development services in India on iOS and Android platforms</h4>
                    <img src={arrow} alt="" />
                </div>

                <div className="service">
                    <div>
                        <img src={img1} alt="" />
                        <h1>Digital Marketing</h1>
                    </div>
                    <h4>Top digital marketing company in India powered by AI technology, market research and data analytics</h4>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>


    )
}

export default Home;



