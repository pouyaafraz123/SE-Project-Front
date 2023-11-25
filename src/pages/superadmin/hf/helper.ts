import { IHealthFacility, IHealthFacilityDTO } from '@api/hf'
import { toPhone } from '@utils'
import { IFormValues } from '@/templates/hf/hfForm/hfFormSchema'

export const map = {
  fromAPI: (data: IHealthFacility): IFormValues => {
    return {
      HFType: data.type,
      HFName: data.name,
      Country: data.country,
      State: data.state,
      City: data.city,
      PostalCode: data.postal_code,
      WebSite: data.website,
      Email: data.email,
      ContactFirstName: data.contact_first_name,
      ContactLastName: data.contact_last_name,
      Address: data.address,
      Phone: toPhone(data.phone),
      Fax: toPhone(data.fax),
      timezone: data.timezone,
      HFDepartments: data.departments,
      day: { key: '', value: '' },
      endTime: '',
      startTime: '',
      operationTimesLists: [] //TODO: fill later
    }
  },
  toAPI: (data: IFormValues, parent_id: string | null): IHealthFacilityDTO => {
    return {
      type: String(data.HFType.key),
      name: data.HFName,
      city_id: data.City.key,
      postal_code: data.PostalCode,
      phone: `${data.Phone.code}-${data.Phone.number}`,
      fax: `${data.Fax.code}-${data.Fax.number}`,
      website: data.WebSite,
      email: data.Email,
      contact_first_name: data.ContactFirstName,
      contact_last_name: data.ContactLastName,
      address: data.Address,
      departments:
        data.HFDepartments?.map((value) => {
          return value.key
        }) || [],
      timezone_id: String(data.timezone.key),
      parent_id
    }
  }
}
