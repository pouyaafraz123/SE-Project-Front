import { createColumnHelper } from '@tanstack/react-table'
import { IUsers } from '@api/users'
import { Spoiler } from '@/components/atoms/spoiler/spoiler.tsx'

const columnHelper = createColumnHelper<IUsers>()

export const columnsUsers = [
  columnHelper.accessor('uuid', {
    header: 'شناسه',
    cell: (props) => props?.getValue() || '- - -'
  }),
  columnHelper.accessor('firstName', {
    header: 'نام',
    cell: (props) => props?.getValue() || '- - -'
  }),
  columnHelper.accessor('lastName', {
    header: 'نام خانوادگی',
    cell: (props) => props?.getValue() || '- - -'
  }),
  columnHelper.accessor('email', {
    header: 'ایمیل',
    cell: (props) => props?.getValue() || '- - -'
  }),
  columnHelper.accessor('role', {
    header: 'نقش',
    cell: (props) => props?.getValue() || '- - -'
  }),
  columnHelper.accessor('userState', {
    header: 'حالت کاربری',
    cell: (props) => props?.getValue() || '- - -'
  }),
  columnHelper.accessor('mobileNumber', {
    header: 'شماره',
    cell: (props) => {
      return <Spoiler value={props.getValue()} />
    }
  })
]
