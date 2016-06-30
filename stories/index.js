import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import DeviceIcon from '../src'

storiesOf('DeviceIcon', module)
  .addWithInfo('Basic', 'without type', () => (
    <DeviceIcon />
  ), { inline: true })
  .add('Basic with type', () => (
    <DeviceIcon type="device:wemo" />
  ))
  .add('with type and size', () => (
    <div>
      <DeviceIcon type="device:wemo" size="small" />
      <DeviceIcon type="device:wemo" size="regular" />
      <DeviceIcon type="device:wemo" size="large" />
    </div>
  ))
