import axios from 'axios'
import { QueryClient } from '@tanstack/react-query'
import { axiosConfig, reactQueryConfig } from '@configs'

export const axiosClient = axios.create(axiosConfig)

export const queryClient = new QueryClient(reactQueryConfig)
