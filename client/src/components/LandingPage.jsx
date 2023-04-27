import React from 'react';
import css from "./LandingPage.module.css"
import heroBg from "../assets/heroBgPoly.png";
import heroImg from "../assets/heroImg.png";
import LandingPageFeatures from './common/LandingPageFeatures';
import LandingPageConstants from "../utils/LandingPageConstants.js";

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
                    <img className={css.heroBgPoly} src={heroBg} width= "600" alt="" />
                    <img className =  {css.heroImg} src={heroImg} width= "512" alt="" />
                </div>

            </div>
         </section>

         <section className={css.featuresContainer}>

             <p className={css.featTitle}>
             {LandingPageConstants.title}
             </p>

            <div className={css.featuresGrid}>

                <div className="feat1Left">
                    <img src="" alt="" className={css.feat1Poly} width= "512"/>
                    <img className =  {css.feat1Poly} src="" width= "512" alt="" />
                </div>

                <LandingPageFeatures
                        title1 =  {LandingPageConstants.feature1.title1}
                        title2 = {LandingPageConstants.feature1.title2}
                        desc= {LandingPageConstants.feature1.desc}
                        />


                <div className={css.feat2baner}>
                    <img src="" alt="" className={css.feat2Poly} width= "512"/>
                    <img className =  {css.feat2Poly} src="" width= "512" alt="" />
                </div>

                <LandingPageFeatures
                        title1 =  {LandingPageConstants.feature2.title1}
                        title2 = {LandingPageConstants.feature2.title2}
                        desc= {LandingPageConstants.feature2.desc}
                        />


                <div className={css.feat3baner}>
                    <img src="" alt="" className={css.feat3Poly} width= "512"/>
                    <img className =  {css.feat3Poly} src="" width= "512" alt="" />
                </div>

                <LandingPageFeatures
                        title1 =  {LandingPageConstants.feature3.title1}
                        title2 = {LandingPageConstants.feature3.title2}
                        desc= {LandingPageConstants.feature3.desc}
                        />

                <div className={css.feat4baner}>
                    <img src="" alt="" className={css.feat4Poly} width= "512"/>
                    <img className = {css.feat4Poly} src="" width= "512" alt="" />
                </div>

                <LandingPageFeatures
                        title1 =  {LandingPageConstants.feature4.title1}
                        title2 = {LandingPageConstants.feature4.title2}
                        desc= {LandingPageConstants.feature4.desc}
                        />

                <div className={css.feat5baner}>
                    <img src="" alt="" className={css.feat5Poly} width= "512"/>
                    <img className =  {css.feat5Poly} src="" width= "512" alt="" />
                </div>

        
                <LandingPageFeatures
                        title1 =  {LandingPageConstants.feature5.title1}
                        title2 = {LandingPageConstants.feature5.title2}
                        desc= {LandingPageConstants.feature5.desc}
                    />
           
            </div>
        </section>

         
    </div> 
    // main wrapper div or container
  )
}

export default LandingPage;