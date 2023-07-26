import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function LogoImage({ size, center = false }) {
  return (
    <Flex justifyContent={center ? 'center' : ''}>
      <img width={size} src="https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png" />
    </Flex>
  )
}

LogoImage.propTypes = {
  size: PropTypes.string.isRequired,
  center: PropTypes.bool
}

export default LogoImage