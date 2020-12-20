import { FunctionComponent } from "react";
import classNames from "classnames";

interface Props {
	hidingPage: boolean;
}

const Overlay: FunctionComponent<Props> = ({ hidingPage }) => {
	return (
		<div
			className={classNames("Overlay", {
				"Overlay--hidePage": hidingPage,
			})}
		/>
	);
};

export default Overlay;
