import './Button.css'

export interface Props {
  text: string
}

export const Button = ({ text }) => {
  return (
    <button>
      <span className='text'>{text}</span>
    </button>
  )
}
