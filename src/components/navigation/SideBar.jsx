import { Box, Flex } from '@chakra-ui/react';
import ProfileSection from './ProfileSection';
import LogoImage from '../LogoImage';
import NavItem from './NavItem';

export default function SideBar() {
  return (
    <aside>
      <Box mt="4">
        <LogoImage size="50px" center />
      </Box>
      <Flex direction="column" gap="2" px="4" mt="4">
        <NavItem text="Dashboard" location="dashboard" />
        <NavItem text="Dashboard" location="dashboard" />
        <NavItem text="Dashboard" location="dashboard" isInternal={false} />
      </Flex>
      <ProfileSection />
    </aside>
  )
}