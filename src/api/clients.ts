import axios from 'axios'
import { QueryClient } from '@tanstack/react-query'
import { axiosConfig, reactQueryConfig } from '@configs'

const axiosClient = axios.create(axiosConfig)
// axios.interceptors.response.use(undefined, (error) => {})

const queryClient = new QueryClient(reactQueryConfig)

export { axiosClient, queryClient }
