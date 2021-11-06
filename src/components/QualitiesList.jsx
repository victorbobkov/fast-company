import React from 'react'
import Quality from './quality'
import PropTypes from 'prop-types'

const QualitiesList = ({qualities}) => {
   return (
      <>
         {qualities.map(({ _id, ...rest }) => (
            <Quality key={_id} {...rest} />
         ))}
      </>
   )
}

QualitiesList.propTypes = {
   qualities: PropTypes.array
}

export default QualitiesList