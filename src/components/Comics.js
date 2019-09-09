import React from 'react';

// stateless functional component as a presentational component
// ES6 Destructuring passed prop
const Comics = ({superHeroComics}) =>{

    // If there is no comic for that superhero than display nothing
    // Conditional rendering
    if (superHeroComics.length <1)
        return null;

    return (   
        <div>
            <hr />
            <h3>Comic Book List </h3> 
            {
                // i is used as key in mapping function
                superHeroComics.map((comic, i) => {

                return (
                    <div key={'comic_'+i}
                         className='comics'>
                        
                        <p key={'title_' +i}>
                            {comic.title}
                        </p>           
                        <img
                            key={'image_' +i} 
                            src ={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                            alt="comic-image" 
                            style = {{
                                width: 200,
                                height: 200
                            }}
                        />
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Comics;
