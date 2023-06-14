import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from "../styles/LandingPage.module.css"
import heroBg from "../assets/animations/landingpage/heroBlob.svg";
import heroImg from "../assets/heroImg.png";

import LandingPageFeatures from './common/LandingPageFeatures.jsx';
import TestmonialSwiper from "./macro components/TestmonialSwiper.jsx";


import {features ,testimonials} from "../utils/LandingPageConstants.js";

import socialImg1 from "../assets/facebook.png";
import socialImg2 from "../assets/twitter.png";
import socialImg3 from "../assets/instagram.png";
import socialImg4 from "../assets/github.png";

import feat1 from "../assets/feat1.png";

import feat2 from "../assets/feat2.png";

import feat3 from "../assets/feat3.png";

import feat4 from "../assets/feat4.png";

import feat5 from "../assets/feat5.png";

import toggle from "../assets/toggler.png";


function LandingPage() {

  const navigate = useNavigate();

  const handleSignup = ()=>{
        navigate('/signup',{ replace: true });
    }

  return (
    <div>
         <section className={css.HeroSection}>
            <nav className={css.navbar}>
                <div className={css.navBarToggler}>
                    <img src={toggle} alt="" width={28}/>
                </div>
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

                    <button className={css.signUpBtn} onClick={handleSignup}>
                        Sign Up
                    </button>

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

            <div className={css.featuresWrapper}>

                <div className={css.feature1Wrap}>
                    <div className={css.featbanner}>
                        <img src={feat1} alt="" />
                    </div>

                    <div className={css.featureInfo}>
                        <LandingPageFeatures
                             title1 =  {features.feature1.title1}
                            title2 = {features.feature1.title2}
                            desc= {features.feature1.desc}
                            />
                    </div>
                </div>

                <div className={css.feature2Wrap}>
                    <div className={css.featureInfo}>
                        <LandingPageFeatures
                                title1 =  {features.feature2.title1}
                                title2 = {features.feature2.title2}
                                desc= {features.feature2.desc}
                                />
                    </div>
                    <div className={css.featbanner}>
                        <img src={feat2} alt="" />
                    </div>
                </div>
               
                <div className={css.feature3Wrap}>
                    <div className={css.featbanner}>
                        <img src={feat3} alt="" />
                    </div>

                    <div className={css.featureInfo}>
                        <LandingPageFeatures
                                title1 =  {features.feature3.title1}
                                title2 = {features.feature3.title2}
                                desc= {features.feature3.desc}
                                />
                    </div>
                </div>

                <div className={css.feature4Wrap}>
                        <div className={css.featureInfo}>
                            <LandingPageFeatures
                                    title1 =  {features.feature4.title1}
                                    title2 = {features.feature4.title2}
                                    desc= {features.feature4.desc}
                                    />
                        </div>
                        <div className={css.featbanner}>
                            <img src={feat4} alt="" />
                        </div>
                </div>
                
                <div className={css.feature5Wrap}>
                    <div className={css.featbanner}>
                        <img src={feat5} alt="" />
                    </div>
                    <div className={css.featureInfo}>
                        <LandingPageFeatures
                                title1 =  {features.feature5.title1}
                                title2 = {features.feature5.title2}
                                desc= {features.feature5.desc}
                                />
                    </div>
                </div>
            </div>
        </section>

        <section className={css.testimonialsContainer}>
            <p className={css.testLegend}>
                {testimonials.title}
            </p>
            <div className={css.testimonialSliderWrapper}>
                    <TestmonialSwiper />
            </div>
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