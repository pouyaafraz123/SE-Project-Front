import { Filter } from '@components/molecules/filter'
import { ITableFilterSearchProps } from '@components/organisms/pageTable'
import { TableSearch } from '@components/molecules/tableSearch'
import clsx from 'clsx'
import classes from '../../styles.module.scss'

export function TableFilterSearch({
  filterProps,
  searchProps,
  actions
}: ITableFilterSearchProps) {
  return (
    <div className={clsx(classes.pageTable__filterSearch)}>
      <Filter options={[]} value={[]} {...filterProps} />
      <TableSearch onChange={() => {}} {...searchProps} />
      {actions}
    </div>
  )
}
