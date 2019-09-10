import React from 'react';
import renderer from 'react-test-renderer';
import Info from './Info';

describe('Testing Info Component', () => {
  
    // TODO This test is not correct re-implement it
    test('<Info />  it renders', () => {
        const wrapper = renderer.create(<Info  />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
 
});