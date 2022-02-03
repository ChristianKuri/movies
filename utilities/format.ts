import { Genre } from '../types'

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
