import { useState } from 'react';
import data from '../data/data.json';
import Image1 from '../images/image-douglas-hurley.png';
import Image2 from '../images/image-mark-shuttleworth.png';
import Image3 from '../images/image-victor-glover.png';
import Image4 from '../images/image-anousheh-ansari.png';
import '../styles/Crew.css';

const Crew = () =>{

    const crews = data.crew;
    const [showCrew, setShowCrew] = useState(crews[0]);
    const imagesCrew = [
        {id:1,image:Image1},
        {id:2,image:Image2},
        {id:3,image:Image3},
        {id:4,image:Image4},
    ]
    const [imageCrew, setImageCrew] = useState(imagesCrew[0]);

    function changeCrew(idCrew){
        const newCrew = crews.find((crew)=>crew.id === idCrew);
        setShowCrew(newCrew);
        const newImageCrew = imagesCrew.find((image)=>image.id === idCrew);
        setImageCrew(newImageCrew);
    }
 
    return(
        <div className='crew'>
            <div className='description-crew'>
                <div className='choose'>
                    <p><span>02</span>MEET YOUR CREW</p>
                </div>
                <div className='content-bio'>
                    <h4>{showCrew.role.toUpperCase()}</h4>
                    <h2>{showCrew.name.toUpperCase()}</h2>
                    <p className='bio'>{showCrew.bio}</p>
                    <ul>
                        <li><button className={showCrew.id === 1 ? 'btn-active' : ''} onClick={()=>changeCrew(1)}></button></li>
                        <li><button className={showCrew.id === 2 ? 'btn-active' : ''} onClick={()=>changeCrew(2)}></button></li>
                        <li><button className={showCrew.id === 3 ? 'btn-active' : ''} onClick={()=>changeCrew(3)}></button></li>
                        <li><button className={showCrew.id === 4 ? 'btn-active' : ''} onClick={()=>changeCrew(4)}></button></li>
                    </ul>
                </div>
            </div>
            <div className='image-crew'>
                <div className='container-img-crew'>
                  <img src={imageCrew.image} alt={showCrew.name}/>   
                </div>
            </div>
        </div>
    )
}

export default Crew;