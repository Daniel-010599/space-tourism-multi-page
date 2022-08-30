import data from '../data/data.json';
import { useState } from 'react';
import ImageEuropa from '../images/image-europa.png';
import ImageMars from '../images/image-mars.png';
import ImageMoon from '../images/image-moon.png';
import ImageTitan from '../images/image-titan.png';
import '../styles/Destination.css';

const Destination = () =>{

    const destinations = data.destinations; //[]
    const [showDestination, setShowDestination] = useState(destinations[0]); //{}
    const images= [
        {id:1, image:ImageEuropa},
        {id:2, image:ImageMars},
        {id:3, image:ImageMoon},
        {id:4, image:ImageTitan}
    ]
    const [imageDestination, setImageDestination] = useState(images[0])
    
    function clickChangeDestination(idDestination){
        const descriptionDestination = destinations.find((destination)=>destination.id === idDestination);
        setShowDestination(descriptionDestination);
        
        const image = images.find((image)=>image.id === idDestination);
        setImageDestination(image);
    }

    return(
        <div className="destination">
            <div className="image-planet">
                <div className='choose'>
                    <p><span>01</span>PICK YOUR DESTINATION</p>
                </div>
                <div className='img-planet'>
                  <img src={imageDestination.image} alt={showDestination.name}/>  
                </div>
            </div>
            <div className="description-planet">
                <div>
                    <div className='change-destination'>
                        <ul>
                            {destinations.map((destination)=><li key={destination.id} className={showDestination.id === destination.id ? 'style-border' : ''}><button onClick={()=>clickChangeDestination(destination.id)}>{destination.name.toUpperCase()}</button></li>)}
                        </ul>
                    </div>
                    <h2>{showDestination.name.toUpperCase()}</h2>
                    <p className='p-description'>{showDestination.description}</p>
                    <div className='distance-time'>
                        <div className='distance'>
                            <p>AVG. DISTANCE</p>
                            <h6>{showDestination.distance.toUpperCase()}</h6>
                        </div>
                        <div>
                            <p>EST. TRAVEL TIME</p>
                            <h6>{showDestination.travel.toUpperCase()}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;