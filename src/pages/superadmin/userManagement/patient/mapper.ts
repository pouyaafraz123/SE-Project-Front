import {
  IPatientDTO,
  IPatientDetailEndpoint
} from '@api/userManagement/patient'
import { convertToAPIDateFreeze, encodePhone, toPhone } from '@utils'
import { PatientFormSchema } from '@/templates/userManagement/patient'

export const patientFormAPIMapper = {
  fromAPI: (data: IPatientDetailEndpoint): PatientFormSchema => {
    return {
      firstName: data.first_name,
      lastName: data.last_name,
      gender: data.gender,
      birthday: data.birthday,
      nationalCode: data.national_id || '',
      // hfCountry: data.hf_country,
      // hfState: data.hf_state,
      // hfCity: data.hf_city,
      // hfType: data.hf_type,
      // hfName: data.hf_name,
      // patientFileNumber: data.patient_file_number || '',
      email: data.email,
      phoneNumber: toPhone(data.phone),
      livingCountry: data.country,
      livingState: data.state,
      livingCity: data.city,
      address: data.address,
      mobileNumber: toPhone(data.mobile),
      postalCode: data.postal_code
    }
  },
  toAPI: (data: PatientFormSchema): IPatientDTO => {
    return {
      first_name: data.firstName,
      last_name: data.lastName,
      gender: data.gender.key,
      birthday: convertToAPIDateFreeze(data.birthday),
      national_id: data.nationalCode,
      // hf_id: data.hfName.key,
      // patient_file_number: data.patientFileNumber,
      email: data.email,
      phone: encodePhone(data.phoneNumber),
      mobile: encodePhone(data.mobileNumber),
      city_id: data.livingCity.key,
      address: data.address,
      postal_code: data.postalCode
    }
  }
}
