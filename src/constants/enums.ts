export enum UserTypes {
  MANAGER = 'Manager',
  STAFF = 'Staff',
  CUSTOMER = 'Customer'
}

export const userTypesValue: Record<UserTypes, string> = {
  [UserTypes.CUSTOMER]: 'مشتری',
  [UserTypes.STAFF]: 'کارکن',
  [UserTypes.MANAGER]: 'مدیر'
}

export const getUserTypesValue = (role: UserTypes) => {
  return userTypesValue[role]
}
