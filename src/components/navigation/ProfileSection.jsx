import { Avatar, Box, Flex, Skeleton, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper'

export default function ProfileSection() {
  const { data, isLoading } = useSWR('/auth/profile', fetcher)
  return (
    <Box position="fixed" w={{md: '150px', base: 'full'}} bottom="0" _hover={{ bg: "gray.300", cursor: "pointer" }}>
      <Box p="3" borderTop="1px" borderColor="gray.300" height="">
        <Flex alignItems="center" justifyContent="space-between">
          <Avatar size="sm" />
          <Box>
            <Skeleton isLoaded={!isLoading}>
              <Text>{data?.firstName} {data?.lastName}</Text>
            </Skeleton>
            <Text fontSize="xs">First Officer</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}