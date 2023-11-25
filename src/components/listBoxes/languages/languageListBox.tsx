import { useTranslation } from 'react-i18next'
import { useTableColumns } from './columns'
import { LanguageListBoxProps, languageListBoxFormikSchema } from './types'
import { isValid, findDuplicated } from './helper'
import { FastSelect } from '@/components/fastFields'
import { Grid } from '@/components/atoms/Grid'
import { ListBox } from '@/components/molecules/listBox'
import { Button } from '@/components/atoms/button'
import { generateUUIDv4 } from '@/utils'
import { notify } from '@/components/atoms/notify'

export function LanguageListBox<T extends languageListBoxFormikSchema>(
  props: LanguageListBoxProps<T>
) {
  const { formik } = props
  const { t } = useTranslation('form')

  const { languageLists, language, languageSkills } = formik.values

  function deleteHandler(id: string) {
    const _languageLists = [...languageLists]
    const filteredLang = _languageLists.filter((item) => item.id !== id)
    formik.setFieldValue('languageLists', filteredLang)
  }

  function addHandler() {
    if (isValid(language, languageSkills)) {
      const _languageLists = [...languageLists]

      const foundIndex = findDuplicated(language, _languageLists)
      if (foundIndex === -1) {
        _languageLists.push({
          id: generateUUIDv4(),
          language: language,
          languageSkills: languageSkills
        })
        //set in formik values state
        formik.setFieldValue('languageLists', _languageLists)

        // clear the fields
        formik.setFieldValue('language', { key: '', value: '' })
        formik.setFieldValue('languageSkills', { key: '', value: '' })
      } else {
        notify.error({
          title: t('errors.duplicateItem'),
          text: t('errors.duplicateSelectedLanguage', { row: foundIndex + 1 })
        })
      }
    } else {
      notify.error({
        title: t('errors.emptyTitle'),
        text: t('errors.emptyLanguage')
      })
    }
  }

  const columnDef = useTableColumns({ onDelete: deleteHandler })

  return (
    <>
      <Grid subtitle='infoSubtitle.language' border='top-gradient'>
        <FastSelect formik={formik} name='language' type='language' />
        <FastSelect
          formik={formik}
          name='languageSkills'
          type='languageSkills'
        />
        <Grid.Button>
          <Button mode='add' onClick={addHandler} />
        </Grid.Button>
        <Grid.FullWidthColumn>
          <ListBox
            columnDef={columnDef}
            dataJSON={languageLists}
            title='listBoxTitle.language'
          />
        </Grid.FullWidthColumn>
      </Grid>
    </>
  )
}
