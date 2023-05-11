import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from "../styles/LandingPage.module.css"
import heroBg from "../assets/animations/landingpage/heroBlob.svg";
import heroImg from "../assets/heroImg.png";
import bell from "../assets/bell.png";
import user from "../assets/user.png";

import LandingPageFeatures from './common/LandingPageFeatures.jsx';
import TestmonialSwiper from "./macro components/TestmonialSwiper.jsx";


import {features ,testimonials} from "../utils/LandingPageConstants.js";

import feat1Poly from "../assets/feat1Poly.png";
import feat2Poly from "../assets/feat2Poly.png";
import feat3Poly from "../assets/feat3Poly.png";
import feat4Poly from "../assets/feat4Poly.png";
import feat5Poly from "../assets/feat5Poly.png";

import feat1Img from "../assets/feat1Img.png";
import feat2Img from "../assets/feat2Img.png";
import feat3Img from "../assets/feat3Img (1).png";
import feat4Img from "../assets/feat4Img (3).png";
import feat5Img from "../assets/feat5Img.png";

import socialImg1 from "../assets/facebook.png";
import socialImg2 from "../assets/twitter.png";
import socialImg3 from "../assets/instagram.png";
import socialImg4 from "../assets/github.png";



function LandingPage() {

  const navigate = useNavigate();

  const handleSignup = ()=>{
        navigate('/signup',{ replace: true });
    }

  return (
    <div>
         <section className={css.HeroSection}>
            <nav className={css.navbar}>
                <p className={css.brand}>Task<span>er</span></p>
                <ul className={css.navItems}>
                         <li>
                             Tasks
                         </li>
                        <li>
                            Notes
                        </li>
                        <li>
                            Checklist
                        </li>
                        <li>
                            Productivity
                        </li>
                </ul>
                <div className={css.signUp}>
                    
                    <img src={bell} alt="bell" width={24} />

                    <button className={css.signUpBtn} onClick={handleSignup}>
                        Sign Up
                    </button>

                    <img src={user} alt="user" width={32} />


                </div>
            </nav>
            <div className={css.heroContainer}>
                <div className={css.heroLeftContent}>
                    <p className={css.heroLegend}>
                    Achieve More <br /> with Less Stress <br /> <span>Task Management</span> <br /> Made Easy
                    </p>

                    <p className={css.heroSubtext}>
                        Achieve Your Goals Faster with Our Task Management tool <br /> Helps You Stay Focused and Productive in any project & collaborate
                    </p>

                    <button className={css.heroCTA}>
                        Explore Now
                    </button>
                </div>

                <div className={css.heroRightContent}>
                    <img className={css.heroBgPoly} src={heroBg} width= "700" height='700' alt="" />
                    <img className =  {css.heroImg} src={heroImg} width= "512" alt="" />
                </div>

            </div>
         </section>

         <section className={css.featuresContainer}>

             <p className={css.featTitle}>
             {features.title}
             </p>

            <div className={css.featuresGrid}>

                <div className={css.featbanner}>
                    <img src={feat1Poly} alt="" className={css.feat1Poly} width= "448"/>
                    <img className =  {css.feat1Img} src={feat1Img} width= "256" alt="" />
                </div>

                <LandingPageFeatures
                        title1 =  {features.feature1.title1}
                        title2 = {features.feature1.title2}
                        desc= {features.feature1.desc}
                        />

                <LandingPageFeatures
                        title1 =  {features.feature2.title1}
                        title2 = {features.feature2.title2}
                        desc= {features.feature2.desc}
                        />

                <div className={css.featbanner}>
                    <img src={feat2Poly} alt="" className={css.feat2Poly} width= "448"/>
                    <img className =  {css.feat2Img} src={feat2Img} width= "232" alt="" />
                </div>

               

                <div className={css.featbanner}>
                    <img src={feat3Poly} alt="" className={css.feat3Poly} width= "448"/>
                    <img className =  {css.feat3Img} src={feat3Img} width= "232" alt="" />
                </div>

                <LandingPageFeatures
                        title1 =  {features.feature3.title1}
                        title2 = {features.feature3.title2}
                        desc= {features.feature3.desc}
                        />
                
                <LandingPageFeatures
                        title1 =  {features.feature4.title1}
                        title2 = {features.feature4.title2}
                        desc= {features.feature4.desc}
                        />
                
                <div className={css.featbanner}>
                    <img src={feat4Poly} alt="" className={css.feat4Poly} width= "512"/>
                    <img className = {css.feat4Img} src={feat4Img} width= "256" alt="" />
                </div>

                

                <div className={css.featbanner}>
                    <img src={feat5Poly} alt="" className={css.feat5Poly} width= "512"/>
                    <img className =  {css.feat5Img} src={feat5Img} width= "448" alt="" />
                </div>

        
                <LandingPageFeatures
                        title1 =  {features.feature5.title1}
                        title2 = {features.feature5.title2}
                        desc= {features.feature5.desc}
                    />
           
            </div>
        </section>

        <section className={css.testimonialsContainer}>
            <p className={css.testLegend}>
                {testimonials.title}
            </p>
            <TestmonialSwiper />
        </section>

        <section className={css.newsLetterContainer}>
            <p className={css.nltitle}>
                Productivity Hacks: A Weekly Newsletter for Streamlining Your Workflow
            </p>
            <p className={css.nlsubtitle}>
                Get insider tips and tricks to optimize your workday and increase your productivity
            </p>
            <div className={css.nlInput}>
                <input placeholder = "John121@gmail.com" type="text" />
                <button> Get Updates </button>
            </div>
        </section>

        <section className={css.footerContainer}>
            <div className={css.footerWrapper}>
                <div className={css.brandWrapper}>
                        <p className={css.brandTag}>Task<span>er</span></p>
                        <p className={css.brandQuote}>
                            Best task management tool for your projects can be tracked and done in time
                        </p>
                </div>
                <div className={css.Info}>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Updates</p>
                    <p>Contact</p>
                </div>
                <div className={css.Info}>
                    <p>Help & Support</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                </div>
                <div className={css.socialMedia}>
                    <img src={socialImg1} alt="" width = "40" height={40}/>
                    <img src={socialImg2} alt="" width = "40" height={40}/>
                    <img src={socialImg3} alt="" width = "40" height={40}/>
                    <img src={socialImg4} alt="" width = "40" height={40}/>
                </div>
            </div>
            <div className={css.copyrightInfo}>
                <span className={css.hrLine}></span>
                <p className={css.copyRight}>© 2023 Copyright  All rights Reserved Altair Farooque ( dev )</p>
            </div>
            
        </section>

    </div> 
    // main wrapper div or container
  )
}

export default LandingPage;