export function format() { };

format.phone = (phone: string) => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
}

format.birthday = (birthday: string) => {
  return birthday.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
}

format.international = (phone: string) => {
  if (phone.startsWith('+82'))
    return '0' + phone.slice(3);
  return phone;
}
