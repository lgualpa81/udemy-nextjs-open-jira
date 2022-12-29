import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };
  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };
  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - Set isAddingEntry", payload: isAdding });
  };
  const startDragging = () => dispatch({ type: "UI - Set StartDragging" });
  const endDragging = () => dispatch({ type: "UI - Set EndDragging" });

  return (
    <UIContext.Provider
      value={{
        ...state,

        //methods
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
