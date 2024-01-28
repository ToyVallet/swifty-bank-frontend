'use client'

import { HTMLAttributes } from 'react';
import CustomSelect from 'react-select';
import styles from './select.css';
import clsx from 'clsx';
import customStyles from './customStyles';

export default function Select({ label, options, ...props }: SelectProps) {
  const handleChange = (selectedOption: optionObject | null) => {
    // TODO: 선택된 옵션을 받아서 처리.
    console.log(`Option selected:`, selectedOption);
  };
  
  return (
    <div className={clsx(styles.container, props.className)}>
      <label className={styles.label}>
        {label}
      </label>
      <CustomSelect
        options={options}
        className={styles.select}
        styles={customStyles}
        isSearchable={false}
        placeholder={props.placeholder}
        onChange={handleChange}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
}

interface optionObject { 
  value: string,
  label: string 
};

interface SelectProps extends HTMLAttributes<HTMLDivElement>{
  options: optionObject[] | [],
  label?: string,
  placeholder?: string,
}

