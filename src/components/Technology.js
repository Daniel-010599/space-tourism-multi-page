import { useState } from 'react';
import data from '../data/data.json';
import Image1 from '../images/image-launch-vehicle-portrait.jpg';
import Image2 from '../images/image-space-capsule-portrait.jpg';
import Image3 from '../images/image-spaceport-portrait.jpg';
import '../styles/Technology.css';

const Technology = () =>{

    const technologys = data.technology;
    const [technology, setTechnology] = useState(technologys[0]);
    
    const images = [
        {id:1, img:Image1},
        {id:2, img:Image2},
        {id:3, img:Image3}
    ]

    const [imgTechnology, setImgTechnology] = useState(images[0])

    function clickChangeTechnology(idTechnology){
        const newTechnology = technologys.find((technology)=>technology.id === idTechnology);
        setTechnology(newTechnology);

        const newImage = images.find((image)=>image.id === idTechnology);
        setImgTechnology(newImage);
    }

    return(
        <div className='content-technology'>
            <div className='tech-container'>
                <div className='choose'>
                    <p><span>03</span> SPACE LAUNCH 101</p>  
                </div>
                <div className='technology'>
                    <div className='description-technology'>
                        <div className='list-technology'>
                            <ul>
                                <li><button className={technology.id === 1 ? 'btn-tech-active' : ''} onClick={()=>clickChangeTechnology(1)}>1</button></li>
                                <li><button className={technology.id === 2 ? 'btn-tech-active' : ''} onClick={()=>clickChangeTechnology(2)}>2</button></li>
                                <li><button className={technology.id === 3 ? 'btn-tech-active' : ''} onClick={()=>clickChangeTechnology(3)}>3</button></li>
                            </ul>
                        </div>
                        <div>
                            <p className='p-terminology'>THE TERMINOLOGY...</p>
                            <h2>{technology.name.toUpperCase()}</h2>
                            <p className='description-tech'>{technology.description}</p>
                        </div>
                    </div>
                    <div className='img-technology'>
                        <img src={imgTechnology.img} alt={technology.name}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology;