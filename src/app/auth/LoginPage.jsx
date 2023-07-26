import { useState } from 'react';
import { Box, Flex, Card, CardBody, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Text } from '@chakra-ui/react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
// import useSWR from 'swr'
import { http } from '../../helpers/fetcher.helper'

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()

export default function LoginPage() {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // const [shouldFetch, setShouldFetch] = useState(false)
  // const { error } = useSWR(shouldFetch ? '/auth/login' : null, fetcher)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (formData) => {
    setError('')
    console.log(formData)
    try {
      const res = await http.post('/auth/login', formData)
      if (res.status === 200) {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        http.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
        navigate('/app/dashboard')
      }
    } catch (e) {
      if (e.response?.status === 422) {
        setError('Invalid credentials')
      }
    }
    
  }

  return (
    <>
    <Box>
      <Flex justifyContent="center" alignItems="center">
        <Box w="400px" mt="36">
          <Card>
          <CardBody>
            <Heading textAlign="center" my="4" size="md">Login</Heading>
            <Text fontSize="sm" color="red.500">{error && error}</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors?.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  placeholder="john@doe.com"
                  {...register('email')}
                />
                <FormErrorMessage>
                {errors?.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt="2" isInvalid={errors?.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                />
                <FormErrorMessage>
                  {errors?.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Button mt="4" w="100%" isLoading={isSubmitting} type='submit'>Login</Button>
            </form>
          </CardBody>
        </Card>
        </Box>
      </Flex>
      </Box>
    </>
  )
}