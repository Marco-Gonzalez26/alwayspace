import { useRef, useState, useEffect } from 'react'
import './ApodOfBirth.css'
import { Button } from './Button.jsx'
import { searchNasaAPODByDate } from '../scripts/searchNasaApodByDate'
import Loader from '@assets/loader.svg'

type Apod = {
  title: string
  imgUrl: string
}

interface ApodOfBirth {
  apod: Apod
  loading: Boolean
}

export const ApodDayOfBirth = () => {
  const [apodOfBirth, setApodOfBirth] = useState<ApodOfBirth['apod']>({
    title: '',
    imgUrl: ''
  })

  const [loading, setLoading] = useState<ApodOfBirth['loading']>(false)
  const dayRef = useRef(null)
  const monthRef = useRef(null)
  const yearRef = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLoading(true)
    if (yearRef.current.value.length >= 4) {
      searchNasaAPODByDate(
        dayRef.current.value,
        monthRef.current.value,
        yearRef.current.value
      ).then((res) => {
        setApodOfBirth(res)
        setLoading(false)
      })
    }
  }

  return (
    <>
      <h2 className='apod-of-birth_title' id='apod-of-birth'>
        <span className='text-gradient'>Astronomy</span> photo of your birth
        date
      </h2>

      <form
        className='apod-of-birth_selection_container'
        id='form'
        onSubmit={handleSubmit}>
        <div className='apod-of-birth_selection'>
          <label>
            <span className='text-gradient'>Choose a day:</span>
          </label>
          <select name='day' id='day' ref={dayRef}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
            <option value='26'>26</option>
            <option value='27'>27</option>
            <option value='28'>28</option>
            <option value='29'>29</option>
            <option value='30'>30</option>
            <option value='31'>31</option>
          </select>
        </div>
        <div className='apod-of-birth_selection'>
          <label>
            <span className='text-gradient'>Choose a month:</span>
          </label>
          <select name='month' id='month' ref={monthRef}>
            <option value='1'>january</option>
            <option value='2'>february</option>
            <option value='3'>march</option>
            <option value='4'>april</option>
            <option value='5'>may</option>
            <option value='6'>june</option>
            <option value='7'>july</option>
            <option value='8'>august</option>
            <option value='9'>september</option>
            <option value='10'>october</option>
            <option value='11'>november</option>
            <option value='12'>december</option>
          </select>
        </div>

        <div className='apod-of-birth_selection'>
          <label>
            <span className='text-gradient'>Choose a year:</span>
          </label>
          <input placeholder='Year' name='year' ref={yearRef} />
        </div>
        <Button text='Search' />
      </form>

      <div className='image_container'>
        {loading ? (
          <img src={Loader} alt='loader' className='loader'/>
        ) : (
          <a href={apodOfBirth.imgUrl} download='NasaImage' target='_blank' className='apodOfBirth_link'>
            <p>{apodOfBirth.title}</p>
            <img src={apodOfBirth.imgUrl} alt={apodOfBirth.title} />
          </a>
        )}
      </div>
    </>
  )
}
