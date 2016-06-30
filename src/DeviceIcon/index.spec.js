import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import DeviceIcon from './'
import styles from './styles.css'

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

  describe('when given a size prop', () => {
    describe('when size is small', () => {
      it('should render a small icon', () => {
        const sut = shallow(<DeviceIcon type="device:wemo" size="small" />)
        expect(sut).to.have.className(styles.small)
      })
    })
    describe('when size is regular', () => {
      it('should render a regular icon', () => {
        const sut = shallow(<DeviceIcon type="device:wemo" size="regular" />)
        expect(sut).to.have.className(styles.regular)
      })
    })
    describe('when size is large', () => {
      it('should render a large icon', () => {
        const sut = shallow(<DeviceIcon type="device:wemo" size="large" />)
        expect(sut).to.have.className(styles.large)
      })
    })
  })
})
