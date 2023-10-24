import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable'
import { UserOptions } from 'jspdf-autotable'
import { DownloadPDFProps } from './types'

// This component is currently only designed
// for downloading user table's PDF  and will
// be changed later according to new components
// that have the option to download the PDF
export function DownloadPDF(props: DownloadPDFProps) {
  const { data } = props
  const handleDownload = () => {
    const doc = new jsPDF()

    // Set the table headers style
    doc.setTextColor(255, 255, 255)
    doc.setFillColor(0, 0, 255)

    // Define the table headers
    const headers = [['Row', 'Role', 'ID', 'Full Name', 'Gender', 'Status']]

    // Define the table rows
    const rows = data.map((item, index) => [
      item.rowNumber,
      item.role,
      item.id,
      item.fullName,
      item.gender,
      item.status
    ])

    // AutoTable configuration
    const tableConfig: UserOptions = {
      head: headers,
      body: rows,
      margin: { top: 20 },
      headStyles: { fillColor: [0, 0, 255] }
    }

    // Add the table to the PDF document
    autoTable(doc, tableConfig)
    // Download the PDF file
    doc.save('table.pdf')
  }
  // TODO : change the content
  return <button onClick={handleDownload}>Download Table</button>
}
