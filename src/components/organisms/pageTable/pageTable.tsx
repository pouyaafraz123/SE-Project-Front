import { TableContainer } from '@components/organisms/pageTable/components/tableContainer'
import { TableHead } from '@components/organisms/pageTable/components/tableHead'
import { TPageTableProps } from '@components/organisms/pageTable/types.ts'
import { TableFilterSearch } from '@components/organisms/pageTable/components/tableFilterSearch'
import { RowData } from '@tanstack/react-table'
import { TableBody } from '@components/organisms/pageTable/components/tableBody'
import { TableProps } from '@components/organisms/table/types.ts'
import { TableBottom } from '@components/organisms/pageTable/components/tableBottom'

export function PageTable<TData extends RowData>(
  props: TPageTableProps<TData>
) {
  return (
    <TableContainer>
      <TableHead headingProps={props} tableFilterSearchProps={props} />
      {props?.type === 'basic' && <TableBody {...props} />}
      {props?.type !== 'basic' && (
        <TableBody {...props}>{props?.children}</TableBody>
      )}
      <TableBottom {...props} />
    </TableContainer>
  )
}
