import { TInfoCardVariantData } from '@components/molecules/infoCard/types.ts'
import { Icon } from '@components/atoms/icons'

export const VInfoCardVariant: TInfoCardVariantData = {
  'user-main': {
    icon: <Icon name={'user-check'} type={'linear'} />,
    color: 'primary',
    title: 'همه کاربران'
  },
  'user-warning': {
    icon: <Icon name={'forbidden-circle'} type={'linear'} />,
    color: 'warning',
    title: 'کاربران در انتظار تایید'
  },
  'user-danger': {
    icon: <Icon name={'close-circle'} type={'linear'} />,
    color: 'danger',
    title: 'کاربران غیر فعال'
  },
  'user-success': {
    icon: <Icon name={'check-circle'} type={'linear'} />,
    color: 'success',
    title: 'کاربران فعال'
  },
  'appointment-main': {
    icon: <Icon name={'monitor-camera'} type={'linear'} />,
    color: 'bondi-blue',
    title: 'همه وقت‌های ملاقات'
  },
  'appointment-warning': {
    icon: <Icon name={'forbidden-circle'} type={'linear'} />,
    color: 'warning',
    title: 'وقت‌های ملاقات در انتظار'
  },
  'appointment-danger': {
    icon: <Icon name={'close-circle'} type={'linear'} />,
    color: 'danger',
    title: 'وقت‌های ملاقات لغو شده'
  },
  'appointment-success': {
    icon: <Icon name={'check-circle'} type={'linear'} />,
    color: 'success',
    title: 'وقت های ملاقات تکمیل شده'
  },
  'appointment-pending': {
    icon: <Icon name={'menu-dots-circle'} type={'linear'} />,
    color: 'royal-blue',
    title: 'وقت‌های ملاقات در حال اجرا'
  }
}
