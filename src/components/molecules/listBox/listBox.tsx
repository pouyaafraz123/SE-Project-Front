import { Children, PropsWithChildren } from 'react'
import { RowData } from '@tanstack/react-table'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { ListBoxHeader } from './listBoxHeader'
import { ListBoxProps } from '.'
import { Box } from '@/components/atoms/box'
import { Table } from '@/components/organisms/table'

export function ListBox<TData extends RowData>(
  props: PropsWithChildren<ListBoxProps<TData>>
) {
  const {
    title,
    onDownload,
    onPrint,
    columnDef,
    dataJSON,
    children,
    iconName: IconName = 'list',
    contentClassName,
    tableClassName,
    ...tableProps
  } = props

  return (
    <Box px='0' py='0' radius='lg' shadow className={classes.footer}>
      <ListBoxHeader {...{ title, onPrint, onDownload, iconName: IconName }} />
      {columnDef && dataJSON && (
        <>
          <Table
            tableClassName={classes.table}
            tableContainerClassName={classes['table-container']}
            {...tableProps}
            columnDef={columnDef}
            dataJSON={dataJSON}
          />
          {/* <div className='border-bottom'></div> */}
        </>
      )}
      {Children.count(children) !== 0 && (
        <div
          className={clsx([classes['children-container'], contentClassName])}
        >
          {children}
        </div>
      )}
    </Box>
  )
}
