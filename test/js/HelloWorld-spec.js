import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import HelloWorld from '../../src/js/HelloWorld';

describe('HelloWorld', () => {
  let helloWorld;

  describe('#render', () => {
    beforeEach(() => {
      helloWorld = mount(<HelloWorld />);
    });

    it('should render a hello world message', () => {
      expect(helloWorld).to.have.text('Hello World');
    });
  });
});
