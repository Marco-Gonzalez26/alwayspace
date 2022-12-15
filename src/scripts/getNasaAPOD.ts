type ApodImage = {
  title: string
  urlImg: string
  date: string
  explanation: string
}

export const getApodImage = async (): Promise<ApodImage | null> => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      import.meta.env.PUBLIC_NASA_API_KEY
    }`
  )
  const data = await res.json()

  const Apod: ApodImage = {
    date: data.date,
    title: data.title,
    explanation: data.explanation,
    urlImg: data.hdurl
  }
  return Apod
}
getApodImage()
