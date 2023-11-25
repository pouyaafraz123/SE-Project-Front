import { axiosClient, queryClient } from '@api/clients'
import { createMutation } from 'react-query-kit'
import { createUser } from '@api/user'
import { IDoctorDetailEndpoint, IDoctorDTO } from './types'
import { useDoctor, useDoctorList } from '.'
import { AxiosFn, IResponse } from '@/api/types'
import { generatePath } from '@/routes/generatePath'

// TODO return type?
export const createDoctor: AxiosFn<IDoctorDTO, IResponse<any>> = (
  data,
  signal,
  update = false
) => {
  return update
    ? axiosClient.put(
        generatePath('/users/doctor/:id', { id: data.id! }),
        data,
        { signal }
      )
    : axiosClient.post('/users/doctor', data, { signal })
  // return createUser({ role_name: 'doctor', ...data }, signal, update)
}

export const useCreateDoctor = (update = false) =>
  createMutation({
    mutationFn: (data: IDoctorDTO) => createDoctor(data, undefined, update),
    onMutate: (newData) => {},
    onError(_error, _variables, context) {},
    onSuccess: (data, _variables, _context) => {
      const tableKey = useDoctorList.getKey()
      const key = useDoctor.getKey({ id: data.data.id })
      queryClient.invalidateQueries(tableKey)
      queryClient.invalidateQueries(key)
    }
  })
