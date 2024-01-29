import {
  ITableHeadProps,
  TableFilterSearch,
  TableHeading
} from '@components/organisms/pageTable'

export function TableHead({
  headingProps,
  tableFilterSearchProps
}: ITableHeadProps) {
  console.log(tableFilterSearchProps)
  return (
    <div>
      <TableHeading {...headingProps} />
      {(!tableFilterSearchProps?.noSearch ||
        tableFilterSearchProps?.actions) && (
        <TableFilterSearch {...tableFilterSearchProps} />
      )}
    </div>
  )
}
