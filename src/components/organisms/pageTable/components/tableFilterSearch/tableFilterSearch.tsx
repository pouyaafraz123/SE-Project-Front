import { Filter } from '@components/molecules/filter'
import { ITableFilterSearchProps } from '@components/organisms/pageTable'
import { TableSearch } from '@components/molecules/tableSearch'
import clsx from 'clsx'
import classes from '../../styles.module.scss'

export function TableFilterSearch({
  filterProps,
  searchProps,
  actions,
  noSearch
}: ITableFilterSearchProps) {
  return (
    <div className={clsx(classes.pageTable__filterSearch)}>
      {filterProps && <Filter {...filterProps} />}
      {!noSearch && <TableSearch onChange={() => {}} {...searchProps} />}
      {actions}
    </div>
  )
}
