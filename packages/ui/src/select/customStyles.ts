const primaryColor = '#E5FF70';
const secondaryColor = '#B4B4B4';

const customStyles = {
  singleValue: (provided: any) => ({
    ...provided,
    color: `${secondaryColor}`,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    paddingTop: '8px',
  }),

  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: `${secondaryColor}`,
    border: 'none',
    boxShadow: 'none',
    fontSize: '16px',
    fontWeight: 400,
  }),
  
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? `${primaryColor}` : `transparent`,
    color:  state.isSelected ? '#000' : '#FFF',
    width: '100%',
    padding: 20,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `${primaryColor}`,
      color: '#000',
    },
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
  }),
  
  placeholder: (provided: any) => ({
    ...provided,
    borderRadius: '25px',
    color: `${secondaryColor}`,
    fontSize: '16px',
    paddingTop: '8px',
    fontStyle: 'normal',
    fontWeight: 700,
    backgroundColor: 'transparent',
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),

  menu: (provided: any) => ({
    ...provided,
    width: '90%',
    height: 'auto',
    border: "none",
    borderRadius: '20px',
    scrollWidth: '0',
    backgroundColor: '#2A2A2A',
    maxHeight: 'none',
    overflow: 'hidden',
  }),

  menuList: (base: any) => ({
    ...base,
    height: "100%",

   "::-webkit-scrollbar": {
      width: "9px"
   },
  }),
};

export default customStyles;