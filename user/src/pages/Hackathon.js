import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardsH from "../components/CardsH.js";
import "./Hackathon.css"
import NavigationBar from "../components/NavigationBar";
function Hackathon(props) {
const [array, setArray] = useState([]);
const { t } = useTranslation();
const [loading, setLoading] = useState(true);
async function fetchdata() {
try {
    const response = await fetch("http://localhost:4000/users/hackthon", {
    method: "GET",
    credentials: "include",
    });
    const data = await response.json();
    setArray(data.data);
    setLoading(false); // Set loading to false when data is fetched
} catch (error) {
    console.log(error);
    setLoading(false); // Set loading to false in case of an error
}
}
useEffect(() => {
props.setProgress(50);
fetchdata();
setTimeout(() => {
    props.setProgress(100);
}, 500);
}, []);
return (
<>
<NavigationBar language={false}/>
    <h2 style={{ color: "white" }} className="text-center my-2">
    {t("hackathonTop")}
    </h2>
    {loading ? (
    <p>Loading...</p>
    ) : (
    <div id="cardsPlace">
        {array.map((item) => (
        <CardsH
            key={item._id}
            image={item.ImageLink}
            title={item.Title}
            text={[item.Description]}
            PostDate={item.PostDate}
            LastDate={item.EndDate}
            RegistrationLink={item.RegistrationLink}
        />
        ))}
    </div>
    )}
</>
);
}
export default Hackathon;
