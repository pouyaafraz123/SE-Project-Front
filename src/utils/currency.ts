export const convertCurrency = (value: number) =>
  value.toLocaleString('fa', {
    style: 'currency',
    currency: 'IRR'
  })
