import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import GuessCount from "./GuessCount";

describe('<App />', () => {
    const wrapper = shallow(<App />)
    it('contains a zero-guess counter', () => {

        expect(wrapper).to.contain(<GuessCount guesses={0} />)
    })

    it('has 36 cards', () => {
        expect(wrapper.find('Card')).to.have.length(36)
    });
})
