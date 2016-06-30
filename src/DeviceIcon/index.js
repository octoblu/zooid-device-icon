import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
}
const defaultProps = {
  size: 'regular',
}

const DeviceIcon = ({ className, type, size }) => {
  if (!type) return null
  const classes = classNames(styles[size], className)

  const types = type.split(':')
  const iconType = types[0]
  const iconName = types[1]

  const url = `https://icons.octoblu.com/${iconType}/${iconName}.svg`

  return <img src={url} className={classes} alt={type}/>
}

DeviceIcon.propTypes    = propTypes
DeviceIcon.defaultProps = defaultProps

export default DeviceIcon
