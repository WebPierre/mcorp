import React, { FunctionComponent } from "react";
import classNames from "classnames";

import Overlay from "@Components/atoms/Overlay";

import logo from "./logo.png";
import "./style.scss";

interface Props {
	hidingPage: boolean;
	onFullPage: boolean;
}

const Loader: FunctionComponent<Props> = ({ hidingPage, onFullPage }) => {
	return (
		<div
			className={classNames("Loader", {
				"Loader--fullPage": onFullPage,
			})}
		>
			<Overlay hidingPage={hidingPage} />
			<img className="Loader-image" alt="Logo MagicCorporation" src={logo} />
		</div>
	);
};

export default Loader;
