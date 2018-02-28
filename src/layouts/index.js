import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './reset.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="NWA"
      meta={[
        { name: 'description', content: 'NWA' },
        { name: 'keywords', content: 'NWA' },
      ]}>
    </Helmet>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
