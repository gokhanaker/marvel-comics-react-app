import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


describe('Testing App Component', () => {
  
    // Captures the rendered component and create a snapshot file 
    test('<App />  it renders', () => {
        const wrapper = renderer.create(<App />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
 
});