import {
  ITableHeadProps,
  TableFilterSearch,
  TableHeading
} from '@components/organisms/pageTable'

export function TableHead({
  headingProps,
  tableFilterSearchProps
}: ITableHeadProps) {
  return (
    <div>
      <TableHeading {...headingProps} />
      {!headingProps?.noSearch && (
        <TableFilterSearch {...tableFilterSearchProps} />
      )}
    </div>
  )
}
