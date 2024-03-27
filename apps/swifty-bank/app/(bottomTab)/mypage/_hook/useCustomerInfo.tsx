import { useEffect, useState } from "react"
import URL from "@/_api/url";
import { get } from "@/_api/utils";
import { User as ResponseUser } from "@/_api/type";

export const useCustomerInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState<'MALE' | 'FEMALE'>('MALE');
  const [birthDate, setBirthDate] = useState('');
  const [nationality, setNationality] = useState('');
  const [customerStatus, setCustomerStatus] = useState<'ACTIVE' | 'INACTIVE'>('ACTIVE');

  const getCustomer = async () => {
    const {
      name,
      phoneNumber,
      gender,
      birthDate,
      nationality,
      customerStatus
    } = await get<ResponseUser>(URL.USER.info, {}, 'no-cache');
    setName(name);
    setPhoneNumber(phoneNumber);
    setGender(gender);
    setBirthDate(birthDate);
    setNationality(nationality);
    setCustomerStatus(customerStatus);
  }

  useEffect(() => {
    getCustomer();
  }, []);

  return { name, phoneNumber, gender, birthDate, nationality, customerStatus };
}
