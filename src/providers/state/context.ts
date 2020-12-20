import { createContext, useContext } from "react";

import { StateContextType } from "@Types/state";

export const StateContext = createContext<StateContextType>({} as StateContextType);

export const useStateContext = (): StateContextType => {
	return useContext(StateContext);
};
