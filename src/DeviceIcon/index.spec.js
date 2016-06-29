import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import DeviceIcon from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<DeviceIcon />', () => {
  it('should render nothing', () => {
    const sut = shallow(<DeviceIcon />)
    expect(sut).to.be.empty
  })

  describe('when given a type', () => {
    it('should render the device icon', () => {
      const sut = shallow(<DeviceIcon type="device:wemo" />)
      expect(sut.find('img').first()).to.have.prop('src')
    })
  })
})
