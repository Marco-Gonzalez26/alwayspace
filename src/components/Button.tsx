import './Button.css'

export interface Props {
  text: string
  loading: boolean
}

export const Button = ({ text, loading }) => {
  return (
    <button disabled={loading}>
      <span className='text' >{text}</span>
    </button>
  )
}
