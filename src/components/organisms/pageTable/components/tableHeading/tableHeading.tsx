import { Icon } from '@components/atoms/icons'
import { Typography } from '@components/atoms/typography'
import { ITableHeadingProps } from '@components/organisms/pageTable'
import clsx from 'clsx'
import { HeaderTabGroup } from '@components/molecules/headerTabGroup'
import { IconButton } from '@components/molecules/iconButton'
import classes from '../../styles.module.scss'

export function TableHeading({
  title,
  tabProps,
  onDownload,
  onPrint,
  noPrint,
  noDownload
}: ITableHeadingProps) {
  return (
    <div className={clsx(classes.pageTable__heading)}>
      <div className={clsx(classes.pageTable__headingTitle)}>
        <Icon name={'list'} type={'bold-duotone'} color={'primary-dark'} />
        <Typography
          variant={'body'}
          color={'primary-dark'}
          fontWeight={'semi-bold'}
          fontFamily={'Morabba'}
        >
          {title}
        </Typography>
      </div>
      {tabProps && <HeaderTabGroup {...tabProps} />}
      <div className={clsx(classes.pageTable__headIconButtons)}>
        {!noPrint && (
          <IconButton
            icon={<Icon name={'printer-minimalistic'} />}
            label={'پرینت'}
            transparent
            onClick={onPrint}
          />
        )}
        {!noDownload && (
          <IconButton
            icon={<Icon name={'download-square'} />}
            label={'دانلود'}
            transparent
            onClick={onDownload}
          />
        )}
      </div>
    </div>
  )
}
