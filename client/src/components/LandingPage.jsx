import React from 'react';
import css from "../styles/LandingPage.module.css"
import heroBg from "../assets/animations/landingpage/heroBlob.svg";
import heroImg from "../assets/heroImg.png";

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
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                    </svg>

                    <button className={css.signUpBtn}>
                        Sign Up
                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>


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