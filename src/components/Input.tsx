import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({label, onChange, ...props}: Props) => {
  return (
    <>
      {label && 
        <label htmlFor={props.id}>
          {label}
          <input onChange={onChange} className='border p-1 rounded' {...props} />
        </label>}
    </>
  )
}

export default Input
