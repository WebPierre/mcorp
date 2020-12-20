import React, { FunctionComponent, ReactNode, useMemo, useReducer } from "react";

import { State } from "@Types/state";

import { StateContext } from "./context";
import { reducer } from "./reducer";

interface Props {
	children: ReactNode;
}

const WithStateProvider: FunctionComponent<Props> = ({ children }) => {
	const initialState: State = {
		ui: {
			apiResponsePending: true,
		},
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const context = useMemo(
		() => ({
			...(state as State),
			dispatch,
		}),
		[state, dispatch]
	);

	return <StateContext.Provider value={context}>{children}</StateContext.Provider>;
};

export default WithStateProvider;
