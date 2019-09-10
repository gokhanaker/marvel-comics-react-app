import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import * as AppComponent from './App';

describe('Testing App Component', () => {
  
    // Captures the rendered component and create a snapshot file 
    test('<App />  it renders', () => {
        // Renders the component for testing andset it equal to a variable
        const wrapper = renderer.create(<App />);
        // Comparing it to the snapshot
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

 
});