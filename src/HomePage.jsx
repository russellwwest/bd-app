import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import LogoImage from './components/LogoImage'

function HomePage() {
  
  return (
    <>
      <Box w="full" p="2">
        <Flex justifyContent="space-between">
          <Box>Welcome</Box>
          <Box>
            <Link to="/login"><Button>Login</Button></Link>
          </Box>
        </Flex>
      </Box>
      <Box w="full" mt="2">
        <LogoImage size="5%" center />
      </Box>
      <Box w="full" textAlign="center" mt="2">
        <Heading size="lg">Welcome to Bush Divers VA</Heading>
        <Heading size="md">Bush flying in and around Papua New Guinea and Alaska</Heading>
      </Box>
    </>
  )
}

export default HomePage
