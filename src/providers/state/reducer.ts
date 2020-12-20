import { setApiResponsePending } from "@State/actions/setApiResponsePending";
import { Action, State } from "@Types/state";

export const reducer = (state: State, action: Action): State => {
	let nextState: State;

	switch (action.type) {
		case "setApiResponsePending":
			nextState = setApiResponsePending(state, action);
			break;
		default: {
			const exhaustiveCheck: never = action.type;
			throw new Error(`Unsupported type ${exhaustiveCheck}`);
		}
	}

	return nextState;
};
