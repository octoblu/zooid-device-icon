import classNames from 'classnames'
import React, { PropTypes } from 'react'
import _ from 'lodash'
import styles from './styles.css'

const propTypes = {
  type: PropTypes.string,
  logo: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
}
const defaultProps = {
  size: 'regular',
}

const getDeviceIconUrl = (deviceType) => {
  if (_.isEmpty(deviceType)) return ''
  const types = deviceType.split(':')
  const iconType = types[0]
  const iconName = types[1]
  return `https://icons.octoblu.com/${iconType}/${iconName}.svg`
}

const DeviceIcon = ({ type, logo, size, className }) => {
  if (_.isEmpty(logo) && _.isEmpty(type)) return null
  const classes = classNames(styles[size], className)
  const url = logo || getDeviceIconUrl(type)
  return <img src={url} className={classes} alt={type} />
}

DeviceIcon.propTypes    = propTypes
DeviceIcon.defaultProps = defaultProps

export default DeviceIcon
