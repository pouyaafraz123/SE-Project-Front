import { queryClient } from '@api/clients'
import { createMutation } from 'react-query-kit'
import { createUser } from '@api/user'
import { IPatientDetailEndpoint, IPatientDTO } from './types'
import { usePatient, usePatientList } from '.'
import { axiosClient } from '@/api/clients'
import { AxiosFn, IResponse } from '@/api/types'
import { generatePath } from '@/routes/generatePath'

// TODO return Type?
type Response = IResponse<any>
type Variables = IPatientDTO

export const createPatient: AxiosFn<Variables, IResponse<any>> = (
  data,
  signal,
  update = false
) => {
  return update
    ? axiosClient.put(
        generatePath('/users/patient/:id', { id: data.id! }),
        data,
        { signal }
      )
    : axiosClient.post('/users/patient', data, { signal })
  // return createUser({ role_name: 'patient', ...data }, signal, update)
}

export const useCreatePatient = (update = false) =>
  createMutation({
    mutationFn: (data: IPatientDTO) => createPatient(data, undefined, update),
    onMutate: (newData) => {},
    onError(_error, _variables, context) {},
    onSuccess: (data, _variables, _context) => {
      const tableKey = usePatientList.getKey()
      const key = usePatient.getKey({ id: data.data.id })
      queryClient.invalidateQueries(tableKey)
      queryClient.invalidateQueries(key)
    }
  })
