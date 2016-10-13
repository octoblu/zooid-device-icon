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

  describe('when given a thing with a logo and no device type', () => {
    it('should set the logo in the img src', () => {
      const sut = shallow(<DeviceIcon logo={'https://awesomeimages.org'} />)
      const imageSrc = sut.find('img').at(0).prop('src')
      expect(imageSrc).to.deep.equal('https://awesomeimages.org')
    })
  })

  describe('when given a thing with a device type and no logo', () => {
    it('should set the logo in the img src', () => {
      const sut = shallow(<DeviceIcon type={'device:button'} />)
      const imageSrc = sut.find('img').at(0).prop('src')
      expect(imageSrc).to.deep.equal('https://icons.octoblu.com/device/button.svg')
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
