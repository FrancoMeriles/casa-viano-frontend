/* eslint-disable @typescript-eslint/no-explicit-any */
export const capitalizeName = (name: any) =>
  `${name[0].toUpperCase()}${name.substring(1)}`

export const translateCategory = (category: string) =>
  category === 'used' ? 'Usado' : 'Nuevo'
