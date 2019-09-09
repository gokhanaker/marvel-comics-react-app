import React from 'react';
import renderer from 'react-test-renderer';
import Comics from './Comics';


describe('Testing Comics Component', () => {
  
    beforeEach(() => {
        // superHeroComics.length >1 
      });

    test('<Comics />  it renders', () => {
        const wrapper = renderer.create(<Comics />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
 
});