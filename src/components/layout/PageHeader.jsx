import { Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function PageHeader({ text }) {
  return (
    <Heading>{text}</Heading>
  )
}

PageHeader.propTypes = {
  text: PropTypes.string
}

export default PageHeader