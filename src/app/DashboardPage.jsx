import { Box, Skeleton } from '@chakra-ui/react'
import useSWR from 'swr'
import { useSetHeader } from '../hooks/useSetHeader'
import { fetcher } from '../helpers/fetcher.helper'

export default function DashboardPage() {
  const { data, isLoading } = useSWR('/auth/profile', fetcher)
  useSetHeader('Dashboard')
  return (
    <Box>
      Welcome, <Skeleton isLoaded={!isLoading}>{data?.firstName}</Skeleton>
    </Box>
  )
}