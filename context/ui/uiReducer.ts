import { UIState } from './UIProvider';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Set isAddingEntry', payload: boolean }
  | { type: 'UI - Set StartDragging' }
  | { type: 'UI - Set EndDragging' }

//recibe un estado una accion y retorna un nuevo estado (no una mutacion del estado)
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true
      }
    case 'UI - Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false
      }
    case 'UI - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }
    case 'UI - Set StartDragging':
      return {
        ...state,
        isDragging: true
      }
    case 'UI - Set EndDragging':
      return {
        ...state,
        isDragging: false
      }
    default:
      return state
  }
}