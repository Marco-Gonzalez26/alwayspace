export const searchNasaAPODByDate = async (day, month, year) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      import.meta.env.PUBLIC_NASA_API_KEY
    }&date=${year}-${month}-${day}`
  )
  const data = await res.json()
  return {
    title: data?.title,
    imgUrl: data?.hdurl,
    error: data?.msg
  }
}
