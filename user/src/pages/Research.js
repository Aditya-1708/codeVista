import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';
import CardsR from '../components/CardsR.js'
import NavigationBar from "../components/NavigationBar";
import "./Research.css"
function Research(props) {
    const [array,setArray]=useState([]);
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    async function fetchdata() {
        try {
          const response = await fetch('http://localhost:4000/users/research', {
            method: 'GET',
            credentials: "include"
          });
          const data = await response.json();
          setArray(data.data);
          console.log(data)
          setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
          console.log(error);
          setLoading(false); // Set loading to false in case of an error
        }
      }
    useEffect(()=>{
        props.setProgress(50)
        fetchdata();
        setTimeout(()=>{
            props.setProgress(100)
        },500)
    },[])

    // document.body.style.background = "#242124";
return (
<>
<NavigationBar language={false}/>
<h2 style={{ color: "white" }} className="text-center my-2">
    {t('researchTop')}
    </h2>
    {loading ? (
        <p>Loading...</p>
      ) : (
        <div id="cardsPlace">
          {array.map((item) => (
            <CardsR
              key={item._id}
              title={item.Title}
              text={item.Description}
              PostDate={item.PostDate}
              DocumentLink={item.DocumentLink}
            />
          ))}
        </div>
      )}
</>
)
}

export default Research;
