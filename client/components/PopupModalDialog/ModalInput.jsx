import React from 'react'

const ModalInput = ({
  label,
  placeholder,
  type,
  options,
  id,
  onChange,
  value,
  defaultOpt,
  contain = false
}) => {
  return type ? (
    <div
      className={` flex  align-center space-between ${
        contain ? 'input-container' : null
      }`}
    >
      {label ? <label htmlFor=''>{label}</label> : null}
      <input
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        className='modal-input'
        type={type}
      />
    </div>
  ) : (
    <div className={`${contain ? 'input-container' : null}`}>
      <label htmlFor=''>{label}</label>
      <select
        value={value}
        onChange={onChange}
        id={id}
        className='modal-select'
        name={value}
      >
        <option selected disabled>
          {defaultOpt}
        </option>
        {options.map(opt => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ModalInput
