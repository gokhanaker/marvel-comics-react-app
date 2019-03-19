import React from 'react';

const Comics = ({superHeroComics}) =>{

    // if there is no comic for that superhero than display nothing
    if (superHeroComics.length <1)
        return null;

    return (   
        <div>
            <hr />
            <h3>Comic Book List </h3> 
            {
                // i is used as kay in mapping function
                superHeroComics.map((comic, i) => {

                return (
                    <div className = 'comics'>
                        <p key = {'title_' +i}>{comic.title}</p>           
                        <img key = {'image_' +i} src ={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                        alt = "comic-image" style = {{
                            width: 200,
                            height: 200
                        }}/>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Comics;
