import PropType from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function NavItem({ text, location, isInternal = true }) {
  return (
    <Box p="2" rounded="md" _hover={{ bg: "gray.300", cursor: "pointer" }}>
      <Link to={`/${isInternal ? 'app/'+ location : location}`}>{text}</Link>
    </Box>
  )
}

NavItem.propTypes = {
  text: PropType.string.isRequired,
  location: PropType.string,
  isInternal: PropType.bool
}

export default NavItem