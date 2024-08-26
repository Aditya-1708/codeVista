import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/Cv.png";

function NavigationBar(language) {
const handleItemClick = (eventKey, event) => {
if (eventKey === "item1") {
    changeLanguage("en");
}
if (eventKey === "item2") {
    changeLanguage("hindi");
}
if (eventKey === "item3") {
    changeLanguage("kannada");
}
};
const { t } = useTranslation();
const { i18n } = useTranslation();

const changeLanguage = (lng) => {
i18n.changeLanguage(lng);
};

const handleTouchEnter = () => {
document.getElementById("Logout").style.color = "red";
};
const handleTouchLeave = () => {
document.getElementById("Logout").style.color = "#f08080";
};
const handleLogout=()=>{
sessionStorage.setItem("isAuthenticated","false");
};
return (
<div>
    <Navbar 
    expand="lg"
    style={{ background: "black", width: "100vw", }}
    variant="dark"
    >
    <Container style={{marginLeft:"2%",marginRight:"0%"}} className="d-flex flex-row-reverse">
        <LinkContainer to="/">
        <Nav.Link>
            <span
            style={{ color: "#f08080" ,justifyContent:"end" }}
            id="Logout"
            onMouseEnter={handleTouchEnter}
            onMouseLeave={handleTouchLeave}
            onClick={handleLogout}
            >
            {t("navLogout")}
            </span>
        </Nav.Link>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav
        ><LinkContainer to="/Home">
        <Navbar.Brand>
            <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
            />{" "}
           {t("brandName")}
        </Navbar.Brand>
        </LinkContainer>

            <LinkContainer to="/Home">
            <Nav.Link>{t("navHome")}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Compiler">
            <Nav.Link>{t("navCompiler")}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Hackathon">
            <Nav.Link>{t("navHackathon")}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/News">
            <Nav.Link>{t("navTechNews")}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Research">
            <Nav.Link>{t("navResearch")}</Nav.Link>
            </LinkContainer>
            {language.language?<NavDropdown
            menuVariant="dark"
            title={t("navLanguage")}
            id="basic-nav-dropdown"
            onSelect={handleItemClick}
            >
            <NavDropdown.Item eventKey="item1" href="#action/3.1">
                {t("navLanguageDropdown1")}
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="item2" href="#action/3.2">
                {t("navLanguageDropdown2")}
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="item3" href="#action/3.3">
                {t("navLanguageDropdown3")}
            </NavDropdown.Item>
            </NavDropdown>:<></>}
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
);
}

export default NavigationBar;