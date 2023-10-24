import { TInformationItemProps } from '@components/molecules/informationItem'
import { Avatar } from '@components/atoms/avatar'
import { Fragment, useMemo } from 'react'
import { addColon } from '@utils'
import { VInformationItemVariants } from '@components/molecules/informationItem'
import { Link } from '@components/atoms/link'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import { Label } from '@components/atoms/label'
import classes from './styles.module.scss'

/**
 * InformationItem component displays information about an entity.
 *
 * @param {TInformationItemProps} props - The props for the InformationItem component.
 * @param {string} [props.id] - The unique identifier of the entity.
 * @param {string} [props.name] - The first name of the entity.
 * @param {string} [props.lastName] - The last name of the entity.
 * @param {string} [props.avatarUrl] - The URL of the avatar image.
 * @param {boolean} [props.noAvatar] - Flag to indicate if the avatar should not be displayed.
 * @param {string} [props.link] - The link associated with the entity.
 * @param {string} [props.title] - The title associated with the item.
 * @param {{ [key: string]: string }} [props.details] - Details about the entity, represented as key-value pairs.
 * @param {string} [props.variant] - The variant of the InformationItem.
 * @returns InformationItem The rendered InformationItem component.
 */
export function InformationItem(props: TInformationItemProps) {
  const variantProps = VInformationItemVariants[props?.variant]

  const id = props?.id || variantProps?.id,
    firstName = props?.name || variantProps?.name || '',
    lastName = props?.lastName || variantProps?.lastName || '',
    avatarUrl = props?.avatarUrl || variantProps?.avatarUrl,
    noAvatar = props?.noAvatar || variantProps?.noAvatar,
    link = props?.link || variantProps?.link || '',
    title = props?.title || variantProps?.title,
    details = props?.details || variantProps?.details

  const renderedDetails = useMemo(() => {
    const detailsKey = Object.keys(details) || []

    return detailsKey?.map((key, index) => {
      const detail = details[key]

      return (
        <Fragment key={detail + index}>
          <Typography fontFamily={'Morabba'} variant={'caption1'}>
            {index !== 0 && '/'}
          </Typography>
          <Typography fontFamily={'Morabba'} variant={'caption1'}>
            {detail}
          </Typography>
        </Fragment>
      )
    })
  }, [details])

  return (
    <div className={clsx(classes.informationItem)}>
      {!noAvatar && (
        <div className={clsx(classes.informationItem__column)}>
          <Avatar
            userInfo={{ firstName, lastName, imageUrl: avatarUrl }}
            size={'smaller'}
          />
          {link && <Link to={link}>مشاهده پروفایل</Link>}
        </div>
      )}
      <div className={clsx(classes.informationItem__column)}>
        <div>
          <Typography fontFamily={'Morabba'} variant={'caption1'}>
            {addColon(title)}
          </Typography>
        </div>
        <div className={clsx(classes.informationItem__texts)}>
          <div>
            <Label text={id} variant={props?.variant} />
          </div>
          <div>
            <Typography
              variant={'subtitle1'}
            >{`${firstName} ${lastName}`}</Typography>
          </div>
        </div>
        <div className={clsx(classes.informationItem__details)}>
          {renderedDetails}
        </div>
      </div>
    </div>
  )
}
