import { Dispatch } from "react";

export interface SetApiResponsePendingAction {
	apiResponsePending: boolean;
	type: "setApiResponsePending";
}

export type Action = SetApiResponsePendingAction;

type DispatchAction = Dispatch<Action>;

export interface State {
	ui: {
		apiResponsePending: boolean;
	};
}

export interface StateContextType extends State {
	dispatch: DispatchAction;
}
