import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({label, ...props}: Props) => {
  return (
    <>
      {label && 
        <label htmlFor={props.id}>
          {label}
          <input className='border p-1 rounded' {...props} />
        </label>}
    </>
  )
}

export default Input
