import { IFormValues } from '@components/templates/hf/hfForm/schema'
import { IHealthFacility, IHealthFacilityDTO } from '@api/hf'

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
      Phone: data.phone,
      Fax: data.fax
    }
  },
  toAPI: (data: IFormValues): IHealthFacilityDTO => {
    return {
      type: String(data.HFType.value),
      name: data.HFName,
      city_id: Number(data.City.key),
      postal_code: data.PostalCode,
      phone: `${data.Phone.code}-${data.Phone.number}`,
      fax: `${data.Fax.code}-${data.Fax.number}`,
      website: data.WebSite,
      email: data.Email,
      contact_first_name: data.ContactFirstName,
      contact_last_name: data.ContactLastName,
      address: data.Address,
      departments: []
    }
  }
}
