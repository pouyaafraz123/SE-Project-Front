import { useTranslation } from 'react-i18next'
import { visitSummaryDetailCardVariantValues } from './variant'
import classes from './styles.module.scss'
import { hasNoData } from './helper'
import { VisitSummaryDetailCardProps, VisitSummaryDetailCardVariant } from '.'
import { Typography } from '@/components/atoms/typography'
import { ListBox } from '@/components/molecules/listBox'
import { mergeProps } from '@/utils'
import { DiseaseChip } from '@/components/atoms/diseaseChip'
import { Chip } from '@/components/atoms/chip'
import { RadioButton } from '@/components/formControls/radioButton'

export function VisitSummaryDetailCard(props: VisitSummaryDetailCardVariant) {
  const variantProps = visitSummaryDetailCardVariantValues[props.type]
  const { type, ...rest } = props
  const mergedProps = mergeProps(
    rest as VisitSummaryDetailCardProps,
    variantProps
  )
  const {
    description,
    iconName,
    title,
    confirmationQuestion,
    disease,
    visitFor,
    isConfirmed
  } = mergedProps

  const { t } = useTranslation('form')

  const noData = hasNoData(mergedProps)

  return (
    <ListBox title={title} iconName={iconName}>
      {confirmationQuestion && (
        <div className={classes['confirmation-container']}>
          <Typography>{t(confirmationQuestion)}</Typography>
          {isConfirmed === true && <Chip name='yes' value={t('yes')} />}
          {isConfirmed === false && <Chip name='no' value={t('no')} />}
          {visitFor && (
            <div className='d-flex gap-l5'>
              <RadioButton
                readOnly
                label={t('forMySelf')}
                value='myself'
                selectedValue={visitFor}
              />
              <RadioButton
                readOnly
                label={t('forOthers')}
                value='others'
                selectedValue={visitFor}
              />
            </div>
          )}
        </div>
      )}
      {description && (
        <Typography variant='description1' fontWeight='regular'>
          {description}
        </Typography>
      )}
      {disease && disease.length > 0 && (
        <div className='d-flex gap-m3 flex-wrap'>
          {disease.map((name, index) => (
            <DiseaseChip key={index} name={name} />
          ))}
        </div>
      )}
      {noData && (
        <Chip
          name='nodata'
          value={t('noVisitSummaryData', { title: t(title) })}
        />
      )}
    </ListBox>
  )
}
