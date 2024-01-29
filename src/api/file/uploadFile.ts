import { axiosClient, AxiosFn } from '@/api'
import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { IFile, IFileDTO } from '@api/file/types.ts'

export const uploadFile: AxiosFn<IFileDTO, AxiosResponse<IFile>> = (
  data,
  signal
) => {
  return axiosClient.post('/files/upload-file', data?.formData, { signal })
}

export const useUploadFile = createMutation({
  mutationFn: (data: IFileDTO) => uploadFile(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {}
})
