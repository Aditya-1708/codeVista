import { default as React, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer.js";
import NavigationBar from "../components/NavigationBar.js";
import CLogo from "../icons/C.svg";
import CplusplusLogo from "../images/C++Logo.png";
import GroupImage from "../images/GroupImage.jpeg";
import javaLogo from "../images/javaLogo.png";
import pythonLogo from "../images/pythonLogo.png";
import './Home.css';
function Home(props) {

const { t } = useTranslation();

useEffect(() => {
props.setProgress(50);
setTimeout(() => {
    props.setProgress(100);
}, 500);
}, []);
return (
<>
<NavigationBar language={true}/>
    <section id="section1" >
    <div style={{width:"100vw",height:"90vh"}}>
    <CarouselComponent />
    </div>
    </section>

    {/* <section className="my-3" id="section2">
    <h1 className="text-center" >Some Content</h1>
    </section> */}

    <section className="my-3" id="section3">
    <h2 style={{marginBottom:"3%"}} className="text-center" >{t('homeAvailableFor')}</h2>
    <div className=" text-center">
    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        autoplay={{
            delay: 1000, // Set the delay in milliseconds (adjust as needed)
            disableOnInteraction: false, // Allow manual interaction to not stop autoplay
        }}
          loop={true} // Enable loop if you want continuous rotation
        className="mySwiper"
    >
        <SwiperSlide>
            <img style={{backgroundColor:"black"}} src={javaLogo} />
        </SwiperSlide>
        
        <SwiperSlide>
        <img style={{backgroundColor:"#1B1212"}} src={pythonLogo} />
        </SwiperSlide>

        <SwiperSlide>
            <img style={{backgroundColor:"#5C6BC0"}} src={CLogo}/>
        </SwiperSlide>

        <SwiperSlide>
            <img style={{backgroundColor:"#037FCC"}} src={CplusplusLogo} />
        </SwiperSlide>
    </Swiper>
    </div>
    </section>

    <section  className="my-3" id="section4">
    <div className="">
    <h2 style={{marginTop:"6%"}} className="text-center">{t('homeAboutUs')}</h2>

        <div>
        <h3>{t('homeOurMission')}</h3>
        <p style={{textAlign:"justify"}}>{t('homeOurMissionText')}</p>
        </div>
        <div>
        <h3>{t('homeOurVision')}</h3>
        <p>{t('ourvision')}</p>
        </div>
    </div>
    </section>

    <section id="section5">
    <div>
        <div>
        <h2 className="text-center">{t('homeOurTeam')}</h2>
        </div>
        <div className="my-4 text-center">
  <img id="ourTeamImg" className="" src={GroupImage} alt="Image" />
</div>
<div className="row my-3 text-center" style={{ color: "white" }}>
<div className="col-6">
  <p style={{ textAlign: "justify" }}>
    {t('heyits')} <div style={{ color: "cyan", display: "inline" }}>Aditya Umesh</div> {t('umesh')}
  </p>
</div>
<div className="col-6">
  <p style={{ textAlign: "justify" }}>
    {t('heyits')} <div style={{ color: "cyan", display: "inline" }}>Abhishek</div> {t('abhishek')}
  </p>
</div>
<div className="col-6">
  <p style={{ textAlign: "justify" }}>
    {t('heyits')} <div style={{ color: "cyan", display: "inline" }}>Keshav</div> {t('keshav')}
  </p>
</div>
<div className="col-6">
  <p style={{ textAlign: "justify" }}>
    {t('heyits')} <div style={{ color: "cyan", display: "inline" }}>Aditya Mishra</div> {t('mishra')}
  </p>
</div>
</div>

    </div>
    </section>

    <section id="section6">
    <Footer></Footer>
    </section>

</>
);
}

export default Home;
