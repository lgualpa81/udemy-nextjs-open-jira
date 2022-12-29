import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType =
  | { type: 'Add-Entry', payload: Entry }
  | { type: 'Update-Entry', payload: Entry }
  | { type: 'List-Entries', payload: Entry[] }

//recibe un estado una accion y retorna un nuevo estado (no una mutacion del estado)
export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case 'Update-Entry':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status
            entry.description = action.payload.description
          }
          return entry
        })
      }
    case 'List-Entries':
      return {
        ...state,
        entries: [...action.payload]
      }
    default:
      return state
  }
}