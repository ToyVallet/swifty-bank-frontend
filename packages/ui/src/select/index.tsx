'use client';

import styles from './select.css';
import clsx from 'clsx';

interface SelectProps {
  label?: string;
  placeholder: string;
  options: SelectOption[];
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectOption {
  value: string;
  label: string;
}

export default function Select({ label, options, ...props }: SelectProps) {

  return (
    <div className={clsx(styles.container, props.className)}>
      {label && <label className={styles.label}>{label}</label>}
      <select 
        className={styles.select} 
        name={props.placeholder}
        onChange={props.onChange}
        defaultValue={props.placeholder}
        >
        <option
          className={styles.placeholder} 
          value={props.placeholder}
          disabled hidden
        >
          {props.placeholder}
        </option>
        {options.map((option: SelectOption) => (
          <option 
            key={option.value} 
            value={option.value} 
            className={styles.option}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
