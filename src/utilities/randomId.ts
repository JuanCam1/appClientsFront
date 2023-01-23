import { v4 as uuidv4 } from 'uuid';

export const randomId = (id : string) => {
  id = id || '-1'
  return id === '-1' ? uuidv4() : id
}