interface TableData {
  rowNumber: number
  role: string
  id: string
  fullName: string
  gender: string
  status: string
}

export interface DownloadPDFProps {
  data: TableData[]
}
