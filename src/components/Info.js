import React from 'react';

const Info = ({superHeroName, superHeroDescription, superHeroImage} ) =>{

    // if there is no such a superhero in the marvel api then display nothing
    if (!superHeroName || !superHeroDescription) 
        return null;

    return(
        <div id = 'info'>
            <h3>Marvel Superhero: {superHeroName} </h3>
            <p> {superHeroDescription} </p>
            <img src = {superHeroImage} 
                style = {{
                    width: 300,
                    height: 300
                 }}>
            </img>
        </div>
    )
}

export default Info;