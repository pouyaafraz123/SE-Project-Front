import { Ref, forwardRef, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { SelectBoxProps } from './types'
import classes from './styles.module.scss'
import { SearchInputWithState } from './searchInput'
import { Box } from '@/components/atoms/box'
import { MenuItem } from '@/components/atoms/menuItem'
import FlagImg from '@/components/atoms/flagImg/flagImg'
import { Typography } from '@/components/atoms/typography'

export const SelectBox = forwardRef(function SelectBox(
  props: SelectBoxProps,
  ref: Ref<HTMLDivElement>
) {
  const {
    hasSearch,
    onFilter,
    onSelect,
    options,
    renderItem,
    selectedItemIndex,
    width,
    customElements,
    x,
    y,
    anchor,
    boxClassName
  } = props

  const { t } = useTranslation('common')

  return (
    <Box
      px='0'
      py='2m1'
      radius='md'
      ref={ref}
      style={{
        left:
          (document.dir === 'ltr' && anchor === 'start') ||
          (document.dir === 'rtl' && anchor === 'end') ||
          anchor === 'center'
            ? x
            : 'unset',
        right:
          (document.dir === 'rtl' && anchor === 'start') ||
          (document.dir === 'ltr' && anchor === 'end')
            ? x
            : 'unset',
        top: y,
        width: width + 'px',
        minWidth: 'fit-content',
        position: 'absolute'
        // overflowY: 'auto'
      }}
      className={boxClassName}
    >
      {onFilter && hasSearch && (
        <div className='px-m3'>
          <SearchInputWithState
            onDebouncedValueChange={onFilter}
            className='mb-m3'
          />
        </div>
      )}
      <div
        className={classes.content}
        onClick={() => {
          if (customElements) {
            //close the select box
            onSelect({ key: '', value: '' }, 0)
          }
        }}
      >
        {customElements}
        {options.length === 0 && customElements === undefined && (
          <Typography variant='caption1' center>
            {t('nodata')}
          </Typography>
        )}
        {options.map((item, index) => (
          <div key={index} onClick={() => onSelect(item, index)}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <MenuItem selected={selectedItemIndex === index}>
                {item.flag !== undefined && <FlagImg src={item.flag} />}
                <span>{item.value}</span>
              </MenuItem>
            )}
          </div>
        ))}
      </div>
    </Box>
  )
})
