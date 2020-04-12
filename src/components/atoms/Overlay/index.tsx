import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./style.scss";

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
