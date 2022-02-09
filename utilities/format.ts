import { Genre, Movie, MovieCredit } from '../types'

export const formatGenres = (genres: Genre[], genreIds: number[]) =>
  genreIds.map((id) => genres.find((genre) => genre.id === id)?.name).join(', ')

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

export const getNameFromGenders = (genres: Genre[]) =>
  genres?.map((genre) => genre.name).join(', ')

export const formatAverage = (average: number) => `${average * 10} %`

export const getAge = (date: string) => {
  const today = new Date()
  const birthDate = new Date(date)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1
  }
  return age
}

export const sortByDate = (array: Movie[] | MovieCredit[]) => {
  const sortedArray = array.sort((a, b) => {
    const dateA = new Date(a.release_date)
    const dateB = new Date(b.release_date)
    return dateB.getTime() - dateA.getTime()
  })
  return sortedArray
}
