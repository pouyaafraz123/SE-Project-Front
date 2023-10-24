export type color =
  | 'primary-main'
  | 'primary-dark'
  | 'secondary-main'
  | 'success-main'
  | 'success-dark'
  | 'warning-main'
  | 'warning-dark'
  | 'danger-main'
  | 'danger-dark'
  | 'black'
  | 'white'
  | 'primary-text'
  | 'secondary-text'
  | 'secondary-text-light'
  | 'primary-background'
  | 'secondary-background'
  | 'gray-background'
  | 'border-main'
  | 'border-secondary'
  | 'border-dark'
  | 'inherit'

export type spaceSize =
  | '0'
  | 'xs'
  | 'm1'
  | '2m1'
  | 'm2'
  | 'm3'
  | '2m3'
  | 'm4'
  | 'm5'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'l5'
  | 'l6'

export type shadowSize = 'xs' | 'sm' | 'md' | 'lg'

export type radius = '0' | 'xs' | 'sm' | 'md' | 'lg' | 'full'
export enum enumFontWeight {
  'extra-bold',
  'bold',
  'semi-bold',
  'medium',
  'regular'
}
export type fontWeightType = keyof typeof enumFontWeight

export enum enumFontSize {
  '7xl',
  '2xl',
  'xl',
  'lg',
  'base',
  'md-high',
  'md',
  'sm',
  'xs',
  'micro'
}

export type fontSizeType = keyof typeof enumFontSize

export enum enumFontFamily {
  'dana',
  'Morabba'
}

export type fontFamilyType = keyof typeof enumFontFamily
