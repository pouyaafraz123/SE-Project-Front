import { IDoctorDTO, IDoctorDetailEndpoint } from '@api/userManagement/doctor'
import { encodePhone, toPhone, convertToAPIDateFreeze } from '@utils'
import { getDropdown } from '@utils'
import { DoctorFormSchema } from '@/templates//userManagement/doctor'

export const doctorFormAPIMapper = {
  fromAPI: (data: IDoctorDetailEndpoint): DoctorFormSchema => {
    return {
      address: data.address,
      birthday: data.birthday,
      degree: data.title,
      email: data.email,
      firstName: data.first_name,
      gender: getDropdown(data.gender),
      hfCity: getDropdown(data.facility.city),
      hfCountry: getDropdown(data.facility.country),
      hfName: getDropdown(data.facility.name),
      hfState: getDropdown(data.facility.state),
      hfType: getDropdown(data.facility.type),
      lastName: data.last_name,
      licenseCountry: getDropdown(data.licences.country),
      licenseNumber: data.licences.code,
      livingCity: getDropdown(data.city),
      livingCountry: getDropdown(data.country),
      livingState: getDropdown(data.state),
      officeAddress: data.office_information.address,
      officeCity: getDropdown(data.office_information.city),
      officeCountry: getDropdown(data.office_information.country),
      officePhoneNumber: toPhone(data.office_information.phone), // TODO
      officeState: getDropdown(data.office_information.state),
      phoneNumber: toPhone(data.phone),
      postalCode: data.postal_code,
      speciality: getDropdown(data.speciality),
      website: data.website,
      mobileNumber: toPhone(data.mobile),
      nationalId: data.national_id,
      subSpeciality: getDropdown(data.sub_speciality)
    }
  },
  toAPI: (data: DoctorFormSchema): IDoctorDTO => {
    return {
      birthday: convertToAPIDateFreeze(data.birthday),
      title: data.degree.key,
      email: data.email,
      first_name: data.firstName,
      gender: data.gender.key,
      facility_id: data.hfName.key,
      last_name: data.lastName,
      licences: {
        code: data.licenseNumber,
        country_id: data.licenseCountry.key
      },
      address: data.address,
      city_id: data.livingCity.key,
      office_information: {
        address: data.officeAddress,
        city_id: data.officeCity.key,
        phone: encodePhone(data.officePhoneNumber)
      },
      phone: encodePhone(data.phoneNumber),
      postal_code: data.postalCode,
      speciality: data.speciality.key,
      website: data.website,
      mobile: encodePhone(data.mobileNumber),
      national_id: data.nationalId,
      sub_speciality: data.subSpeciality.key
    }
  }
}
