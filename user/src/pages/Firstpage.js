import React, { useEffect } from "react";
import i18n from "../components/i18n";
import { useTranslation } from "react-i18next";
import Editor from '@monaco-editor/react';

import "./Firstpage.css";
function Firstpage(props) {
const { t } = useTranslation();
useEffect(() => {
    props.setProgress(50);
    setTimeout(() => {
        props.setProgress(100);
    }, 500);
    }, []);

const handleDropdown1Enter = () => {
document.getElementById("DropdownItem1").style.color = "black";
};
const handleDropdown1Leave = () => {
document.getElementById("DropdownItem1").style.color = "white";
};
const handleDropdown2Enter = () => {
document.getElementById("DropdownItem2").style.color = "black";
};
const handleDropdown2Leave = () => {
document.getElementById("DropdownItem2").style.color = "white";
};
const handleDropdown3Enter = () => {
document.getElementById("DropdownItem3").style.color = "black";
};
const handleDropdown3Leave = () => {
document.getElementById("DropdownItem3").style.color = "white";
};

const handleHindi = () => {
i18n.changeLanguage("hindi");
};
const handleEnglish = () => {
i18n.changeLanguage("en");
};
const handleKannada = () => {
i18n.changeLanguage("kannada");
};
return (
<div className="firstmain">
    <header style={{ width: "91vw", overflowX: "hidden" }}>
    <h2 id="codeVISTA">{t("brandName")}</h2>

    <div className="dropdown"></div>

    <div id="signinSignup">
        {/* <button onClick={handelClick(2)}>Sign-in</button>
                <button onClick={handelClick(1)}>Sign-up</button> */}
        <button
        style={{ backgroundColor: "black", borderColor: "black" }}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="inside"
        aria-expanded="false"
        >
        {t("navLanguage")}
        </button>
        <ul style={{ backgroundColor: "black" }} className="dropdown-menu">
        <li>
            <a
            onClick={handleEnglish}
            id="DropdownItem1"
            style={{ color: "white" }}
            onMouseEnter={handleDropdown1Enter}
            onMouseLeave={handleDropdown1Leave}
            className="dropdown-item"
            href="#"
            >
            {t("navLanguageDropdown1")}
            </a>
        </li>

        <li>
            <a
            onClick={handleHindi}
            id="DropdownItem2"
            style={{ color: "white" }}
            onMouseEnter={handleDropdown2Enter}
            onMouseLeave={handleDropdown2Leave}
            className="dropdown-item"
            href="#"
            >
            {t("navLanguageDropdown2")}
            </a>
        </li>

        <li>
            <a
            onClick={handleKannada}
            id="DropdownItem3"
            style={{ color: "white" }}
            onMouseEnter={handleDropdown3Enter}
            onMouseLeave={handleDropdown3Leave}
            className="dropdown-item"
            href="#"
            >
            {t("navLanguageDropdown3")}
            </a>
        </li>
        </ul>
        <a className="firstPAGE" href="http://localhost:3000/Signin">
        {t("signIn")}
        </a>
        <a
        id="signUP"
        className="firstPAGE"
        href="http://localhost:3000/Signup"
        >
        {t("signUp")}
        </a>
    </div>
    </header>
    <div id="body">
    <div id="welcometext">
        <h3
        className={t("homeWelcomeMessage") === "Welcome to codeVista"? "typing-animation" : ""}>
        {t("homeWelcomeMessage")}
        </h3>{" "}
    </div>
    </div>
</div>
);
}
export default Firstpage;
