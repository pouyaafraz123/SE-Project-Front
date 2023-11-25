import { VisitSummaryDetailCardProps } from '.'

export type cardVariant =
  | 'language'
  | 'remote visit'
  | 'birthday'
  | 'patient'
  | 'organisms overview'
  | 'follow up date'
  | 'current illness history'
  | 'physical examination'
  | 'recognition'
  | 'orders'
  | 'followUp'
  | 'education'
  | 'previous diseases lists'
  | 'surgery history'

export type IVisitSummaryDetailCardVariantValues = Record<
  cardVariant,
  VisitSummaryDetailCardProps
>

export const visitSummaryDetailCardVariantValues: IVisitSummaryDetailCardVariantValues =
  {
    language: {
      iconName: 'dialog',
      title: 'language',
      confirmationQuestion: 'confirmationQuestion.language'
    },
    'remote visit': {
      iconName: 'hospital',
      title: 'remoteVisit',
      confirmationQuestion: 'confirmationQuestion.remoteVisit'
    },
    birthday: {
      iconName: 'calendar',
      title: 'birthday',
      confirmationQuestion: 'confirmationQuestion.birthday'
    },
    patient: {
      iconName: 'user-rounded',
      title: 'patientName',
      confirmationQuestion: 'visitForWhom'
    },
    'organisms overview': {
      iconName: 'figma',
      title: 'organismsOverview'
    },
    'follow up date': {
      iconName: 'figma',
      title: 'followUpDate'
    },
    followUp: {
      iconName: 'figma',
      title: 'followUp',
      confirmationQuestion: 'confirmationQuestion.followUp'
    },
    'current illness history': {
      iconName: 'figma',
      title: 'currentIllnessHistory'
    },
    'physical examination': {
      iconName: 'figma',
      title: 'physicalExamination'
    },
    recognition: {
      iconName: 'document-text',
      title: 'recognition'
    },
    orders: {
      iconName: 'clipboard',
      title: 'orders'
    },
    education: {
      iconName: 'square-academic-cap',
      title: 'education',
      confirmationQuestion: 'confirmationQuestion.needEducation'
    },
    'previous diseases lists': {
      iconName: 'figma',
      title: 'previousDiseasesLists'
    },
    'surgery history': {
      iconName: 'figma',
      title: 'surgeryHistory'
    }
  }
