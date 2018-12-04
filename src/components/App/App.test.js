import React from 'react'
import App from './App.jsx'
import { shallow } from 'enzyme'

describe('App', () => {
  it('it should render correctly', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })
})
