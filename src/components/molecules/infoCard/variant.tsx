import { TInfoCardVariantData } from '@components/molecules/infoCard/types.ts'
import { Icon } from '@components/atoms/icons'

export const VInfoCardVariant: TInfoCardVariantData = {
  'user-all': {
    icon: <Icon name={'user-check'} type={'linear'} />,
    color: 'primary'
  },
  'user-pending': {
    icon: <Icon name={'forbidden-circle'} type={'linear'} />,
    color: 'warning'
  },
  'user-denied': {
    icon: <Icon name={'close-circle'} type={'linear'} />,
    color: 'danger'
  },
  'user-active': {
    icon: <Icon name={'check-circle'} type={'linear'} />,
    color: 'success'
  },
  hospital: {
    icon: <Icon name={'forbidden-circle'} type={'linear'} />,
    color: 'warning'
  },
  clinic: {
    icon: <Icon name={'close-circle'} type={'linear'} />,
    color: 'danger'
  },
  health_center: {
    icon: <Icon name={'check-circle'} type={'linear'} />,
    color: 'success'
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
  },
  default: {
    icon: <Icon name={'menu-dots-circle'} type={'linear'} />,
    color: 'royal-blue'
  },
  'all-appointments': {
    icon: <Icon name={'monitor-camera'} type={'linear'} />,
    color: 'bondi-blue'
  },
  'pending-appointments': {
    icon: <Icon name={'forbidden-circle'} type={'linear'} />,
    color: 'warning'
  },
  'completed-appointments': {
    icon: <Icon name={'check-circle'} type={'linear'} />,
    color: 'success'
  },
  'checked-in-appointments': {
    icon: <Icon name={'menu-dots-circle'} type={'linear'} />,
    color: 'royal-blue'
  },
  'canceled-appointments': {
    icon: <Icon name={'close-circle'} type={'linear'} />,
    color: 'danger'
  }
}
