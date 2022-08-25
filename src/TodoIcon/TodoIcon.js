import React from "react";
import "./TodoIcon.css";
import { GiCheckMark } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

function TodoIcon({type, color = 'gray', onClick}) {

	const availableIcons = {
		check: <GiCheckMark className="Icon-svg Icon-svg--check" fill={color} />,
		delete: <MdDelete className="Icon-svg Icon-svg--delete" fill={color} />,
	}

	return (
		<span
			className={`Icon-container Icon-container--${type}`}
			onClick={onClick}
		>
			{availableIcons[type] ?? availableIcons[type]}
		</span>
	);
}

export { TodoIcon };