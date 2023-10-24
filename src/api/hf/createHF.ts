import { queryClient } from '@api/clients'

import { createMutation } from 'react-query-kit'
import { IHealthFacility, IHealthFacilityDTO } from './types'
import { useHF } from './getHF'
import { useHFTable } from './getHFTable'
import { axiosClient } from '@/api/clients'
import { AxiosFn, IResponse } from '@/api/types'

export const createHF: AxiosFn<
  IHealthFacilityDTO,
  IResponse<IHealthFacility>
> = (data, signal) => {
  return axiosClient.post('/facilities', data, { signal })
}

export const useCreateHF = createMutation({
  mutationFn: (data: IHealthFacilityDTO) => createHF(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {
    const tableKey = useHFTable.getKey()
    const key = useHF.getKey({ id: data.data.id })
    queryClient.invalidateQueries(tableKey)
    queryClient.invalidateQueries(key)
  }
})
