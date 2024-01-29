import { AxiosResponse } from 'axios'
import { createMutation } from 'react-query-kit'
import { IFile, IFileDTO } from '@api/file/types.ts'
import { axiosClient, AxiosFn } from '@/api'

export const uploadFile: AxiosFn<IFileDTO, AxiosResponse<IFile>> = (
  data,
  signal
) => {
  return axiosClient.post('/files/upload-file', data?.formData, { signal })
}

export const uploadFiles: AxiosFn<IFileDTO[], IFile[]> = async (
  data,
  signal
) => {
  const result: IFile[] = []
  for (const item of data) {
    result.push((await uploadFile(item, signal))?.data)
  }

  return result
}

export const useUploadFile = createMutation({
  mutationFn: (data: IFileDTO) => uploadFile(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {}
})

export const useUploadFiles = createMutation({
  mutationFn: (data: IFileDTO[]) => uploadFiles(data),
  onMutate: (newData) => {},
  onError(_error, _variables, context) {},
  onSuccess: (data, _variables, _context) => {}
})
