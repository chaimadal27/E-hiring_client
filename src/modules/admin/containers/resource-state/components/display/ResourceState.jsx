import React from 'react'
import { injectIntl } from 'react-intl'

import {
  DisplayItems
} from './../../../../../../components/partials/controls'
import resourceStateFields from './fields/resourceStateFields'

const ResourceStateTemplate = ({ resourceState = {}, isFetching, intl }) => {

  const fields = resourceStateFields({ intl })

  return (
    <DisplayItems 
      isFetching={isFetching} 
      object={ resourceState } 
      fields={fields} 
    />
  )
}

export default injectIntl(ResourceStateTemplate)
