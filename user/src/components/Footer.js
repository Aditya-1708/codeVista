import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../components/Footer.css";
import github from "../icons/github.svg";
import githubColor from "../icons/githubColor.svg";
import insta from "../icons/insta.svg";
import instacolor from "../icons/instagramColor.svg";
import linkedin from "../icons/linkedin.svg";
import linkedinColor from "../icons/linkedinColor.svg";
import youtube from "../icons/youtube.svg";
import youtubeColor from "../icons/youtubeColor.svg";

function Footer() {
const [icon1, seticon1] = useState(insta);
const [icon2, seticon2] = useState(github);
const [icon3, seticon3] = useState(youtube);
const [icon4, seticon4] = useState(linkedin);
const { t } = useTranslation();

const handleInstaIconEnter = () => {
seticon1(instacolor);
};
const handleInstaIconLeave = () => {
seticon1(insta);
};
const handleGitIconEnter = () => {
seticon2(githubColor);
};
const handleGitIconLeave = () => {
seticon2(github);
};
const handleYtIconEnter = () => {
seticon3(youtubeColor);
};
const handleYtIconLeave = () => {
seticon3(youtube);
};
const handleLinkedinIconEnter = () => {
seticon4(linkedinColor);
};
const handleLinkedinIconLeave = () => {
seticon4(linkedin);
};
return (
<>
    <footer
    style={{
        color: "whitesmoke",
        width: "100vw",
        height: "auto",
        backgroundColor: "black",
    }}
    >
        <div className="container">
            <div className=" pt-3"><strong className="footer-text" style={{fontSize:"20px"}}>{t('brandName')}</strong><br />
                <p className="footer-text text-muted my-0" style={{fontSize:"15px"}}>{t('footerBrandCaption')}</p>
            </div>
            <div className="pt-4 pb-4">
                <p  className="footer-text ">{t('footerFeedback')} : <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5cePMxNIoDahwT_Vsbs8vpSsmZolR8cGqou-6t7WDYWISaA/viewform?usp=sf_link"target="_blank">link</a></p>
            </div>
            <div  >
                <p className="footer-text">
                {t('footerContactUs')} :
                    <a
                        target="blank"
                        href="https://www.linkedin.com/in/aditya-umesh-b577651a8"
                    >
                        <img
                        style={{padding:"0px 5px"}}
                        onMouseLeave={handleLinkedinIconLeave}
                        onMouseEnter={handleLinkedinIconEnter}
                        src={icon4}
                        alt="Linkedin"
                        />
                    </a>
                    <a href="" target="blank">
                        <img
                        onMouseLeave={handleInstaIconLeave}
                        onMouseEnter={handleInstaIconEnter}
                        src={icon1}
                        alt="Instagram"
                        />
                    </a>
                </p>
            </div>
            <div >
                <p className="footer-text">
                {t('footerFollowUs')} :
                    <a
                        target="blank"
                        href="https://github.com/Aditya-1708/CodeVista.git"
                    >
                        <img
                        style={{padding:"0px 5px"}}
                        onMouseLeave={handleGitIconLeave}
                        onMouseEnter={handleGitIconEnter}
                        src={icon2}
                        alt="Github"
                        />
                    </a>
                    <a
                        target="blank"
                        href="#"
                    >
                        <img
                        style={{paddingLeft:"5px"}}
                        onMouseLeave={handleYtIconLeave}
                        onMouseEnter={handleYtIconEnter}
                        src={icon3}
                        alt="Youtube"
                        />
                    </a>
                </p>
            </div>
        </div>
    </footer>
</>
);
}

export default Footer;
