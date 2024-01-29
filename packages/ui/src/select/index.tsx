'use client'

import { HTMLAttributes, useState } from 'react';
import CustomSelect from 'react-select';
import styles from './select.css';
import clsx from 'clsx';
import customStyles from './customStyles';

export default function Select({ label, options, ...props }: SelectProps) {
  const [selectedOption, setSelectedOption ] = useState(null);
  const handleChange = (selectedOption: SelectOptionType | null) => {
    // TODO: 선택된 옵션을 받아서 처리.
    console.log(`Option selected:`, selectedOption);
  };
  
  return (
    <div className={clsx(styles.container, props.className)}>
      { label ? 
        <label className={styles.label}>
          {label}
        </label> 
        : null }
      <CustomSelect
        options={options}
        className={styles.select}
        styles={customStyles}
        isSearchable={false}
        placeholder={props.placeholder}
        value={selectedOption}
        onChange={handleChange}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
}

interface SelectOptionType { 
  value: string,
  label: string,
};

interface SelectProps extends HTMLAttributes<HTMLDivElement>{
  options: SelectOptionType[],
  label?: string,
  placeholder?: string,
};
