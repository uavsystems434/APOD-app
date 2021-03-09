import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {

let [photoData, setPhotoData] = useState(null);

  useEffect( () => {
    getInfo();

    async function getInfo() {
    const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    )
    const data = await res.json();
    setPhotoData(data);
    console.log(data);
}

    }, []);
    if (!photoData) return <div />;

    return (
        <div>

        <NavBar />

        <div>
        <div className="const-cont">
        <h1 className="info-header">Astronomy Picture of The Day</h1>
        <p className="const-sub">Check out NASA's <a href="https://apod.nasa.gov/apod/archivepix.html" className="archive">archive</a> of previous image captures along with a brief explanation written by a professional astronomer.</p>
        </div>
        
        {photoData.media_type === "image" ? (
            <img
                src={photoData.url} alt={photoData.title} className="url-img"/>
        ) : (
            <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
            />

        )}
           <div className="media-cont">
                <h2 className="url-title"><p className="title-cont">{photoData.title}</p></h2>
                <h3 className="copyright">Image credit and copyright: {photoData.copyright}</h3>
                <p className="main-text">Explanation: {photoData.explanation}</p>
        </div>
        </div>
        </div>
     )
}