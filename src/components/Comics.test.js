import React from 'react';
import renderer from 'react-test-renderer';
import Comics from './Comics';


describe('Testing Comics Component', () => {
  
    // TODO Test fails fix it
    test('<Comics />  it renders', () => {

        const dummyData = {
            superHeroComics: [    
                {
                    name: "A+X (2012 - 2014)",
                    resourceURI: "http://gateway.marvel.com/v1/public/series/16450"
                },{
                    name: "Age of Heroes (2010)",
                    resourceURI: "http://gateway.marvel.com/v1/public/series/9790"  
                }
            ]
        };

        const wrapper = renderer.create(<Comics superHeroComics={dummyData.superHeroComics} />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
 
});
