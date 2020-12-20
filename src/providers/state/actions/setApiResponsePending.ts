import produce from "immer";

import { SetApiResponsePendingAction, State } from "@Types/state";

export const setApiResponsePending = (state: State, action: SetApiResponsePendingAction): State => {
	return produce(state, (draftState) => {
		draftState.ui.apiResponsePending = action.apiResponsePending;
	});
};
