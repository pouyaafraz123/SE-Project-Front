import { AxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { IResponse } from '../types'
import { useUserStore } from '@/stores'
import { notify } from '@/components/atoms/notify'

export const useErrorHandler = () => {
  const { t } = useTranslation('common')

  return async (error: AxiosError<IResponse<unknown>>) => {
    const onError = (error: string) =>
      notify.error({ title: t('apiError.error'), text: error })

    if (!error.response) {
      if (error.code !== 'ERR_CANCELED') {
        // "ERR_CANCELED" happened if the file query or mutation has been canceled.
        // in this case we don't want to show an error message.
        onError(t('apiError.unable_server_response'))
      }
      return Promise.reject(error)
    }

    switch (error.response.status) {
      case 401:
        await useUserStore.getState().logout()
        onError(t('apiError.logged_out'))
        break

      case 403:
        onError(t('apiError.access_denied'))
        //   history.push(`${base}403`)     // TODO route back to home ??
        break
      case 500:
        onError(t('apiError.server_error'))
        //   history.push(`${base}500`)
        break
      case 400:
        onError(t('apiError.bad_request'))
        //   history.push(`${base}400`)
        break
      case 503:
        onError(t('apiError.service_unavailable'))
        //   history.push(`${base}503`)
        break

      case 406:
        onError(error.response.data.message!) // back-end guarantees this behavior.
        break

      case 422:
        if (error.response.data.errors) {
          onError(Object.values(error.response.data.errors).join('\n'))
        }
        break

      default:
        onError(error.response.data.message ?? t('apiError.defaultError'))
    }

    return Promise.reject(error)
  }
}
