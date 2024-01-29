const primaryColor = '#E5FF70';
const secondaryColor = '#B4B4B4';

const customStyles = {
  singleValue: (provided: object) => ({
    ...provided,
    color: `${secondaryColor}`,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    paddingTop: '8px',
  }),
  
  control: (provided: object) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: `${secondaryColor}`,
    border: 'none',
    boxShadow: 'none',
    fontSize: '16px',
    fontWeight: 400,
  }),
  
  option: (provided: object, state: StateType) => ({
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
  
  placeholder: (provided: object) => ({
    ...provided,
    borderRadius: '25px',
    color: `${secondaryColor}`,
    fontSize: '16px',
    paddingTop: '8px',
    fontStyle: 'normal',
    fontWeight: 700,
    backgroundColor: 'transparent',
  }),
  
  dropdownIndicator: (provided: object) => ({
    ...provided,
    paddingTop: '14px',
  }),
  
  menu: (provided: object) => ({
    ...provided,
    width: '90%',
    height: 'auto',
    border: "none",
    borderRadius: '8px',
    scrollWidth: '0',
    backgroundColor: '#2A2A2A',
    maxHeight: 'none',
    overflow: 'hidden',
  }),
  
  menuList: (base: object) => ({
    ...base,
    height: "100%",
    
    "::-webkit-scrollbar": {
      width: "9px"
    },
  }),
};
interface StateType {
  isSelected?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
}

export default customStyles;