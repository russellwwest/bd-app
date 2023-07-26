import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Box, Grid, GridItem, Show } from '@chakra-ui/react'
import SideBar from '../../components/navigation/SideBar'
import PageHeader from '../../components/layout/PageHeader'
import { useAtomValue } from 'jotai'
import { pagePropsAtom } from '../../state/general.state'

export default function AppLayout() {
  const navigate = useNavigate()
  const pageProps = useAtomValue(pagePropsAtom)
  const [showSideBar, setShowSideBar] = useState(false)
  useEffect(() => {
    window.document.title = pageProps.title
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  })

  return (
    <>
    <Grid h="100vh" templateAreas={`"nav main"`} gridTemplateRows={"1fr"} gridTemplateColumns={{ md: "150px 1fr", base: "0px 1fr" }}>
      <GridItem bg="gray.200" area="nav">
        <SideBar />
      </GridItem>
      <GridItem bg="gray.100" area="main" >
        <Show below="md">
          <Box position="fixed" top="0" left="0" onClick={() => setShowSideBar(!showSideBar)}>X</Box>
        </Show>
        <Box bg="gray.200" hidden={!showSideBar}><SideBar /></Box>
          <Box p={pageProps.fullSize ? '' : '4'}>
          <PageHeader text={pageProps.title} />
          <Box mb="4" mt={pageProps.fullSize ? '' : '4'}>
            <Outlet />
          </Box>
        </Box>
      </GridItem>
    </Grid>     
    </>
  )
}