import React from 'react';

// Stateless functional component as a presentational component
// ES6 Destructuring passed prop
const Info = ({superHeroName, superHeroDescription, superHeroImage} ) => {

    // If there is no such a superhero in the marvel api then display nothing
    // Conditional rendering
    if (!superHeroName || !superHeroDescription) 
        return null;

    return(
        <div id='info'>
            <h3>Marvel Superhero: {superHeroName} </h3>
            <p> {superHeroDescription} </p>
            <img src={superHeroImage} 
                style={{
                    width: 300,
                    height: 300
                 }}>
            </img>
        </div>
    )
}

export default Info;

