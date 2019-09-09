import React from 'react';
import rendeder from 'react-test-renderer';
import App from './App';


/*
import React from 'react';
import renderer from 'react-test-resnderer';

import CountryName from './index';

describe('<CountryName />', () => {
  it('it renders (snapshot)', () => {
    const wrapper = renderer.create(<CountryName country="GB" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('it renders the unknown string if country is null', () => {
    const wrapper = renderer.create(<CountryName country={null} />);
    expect(wrapper.toJSON()).toEqual('Unknown');
  });
});

*/

describe('Testing App Component', () => {

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
      });
    /*
    test('renders the App title', () => {
        const wrapper = renderer.create(<App />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    */
});