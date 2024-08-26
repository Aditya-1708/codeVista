import React from 'react';
import './CardsN.css';
import defaultImg from '../images/Cv.png'
function CardsN(props) {
    return (
        <>
            <div className="card text-bg-dark my-3" style={{ width: "20rem" }}>
                <img src={defaultImg} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text" style={{color:"white"}}>{props.text}</p>
                    <p className="card-PostDate" style={{fontSize:"10px"}}>{props.PostDate}</p>
                    <a href={props.DocumentLink} target="_blank" className="btn btn-primary">full article</a>
                </div>
            </div>
        </>
    );
}

export default CardsN;
