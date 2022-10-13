import React from "react";

export interface BalloonSvgProps {
	fill?: string;
	width?: number;
	height?: number;
}

function BallonSvg(props: BalloonSvgProps) {
	const width = props.width?.toString?.() ?? "270";
	const height = props.height?.toString?.() ?? "322";
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 270 322"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M39.8358 40.1642C92.2492 -12.2492 177.228 -12.2492 229.642 40.1642C282.222 92.7445 282.222 177.994 229.642 230.574L141.81 318.406C137.904 322.311 131.573 322.311 127.668 318.406L39.8358 230.574C-12.7445 177.994 -12.7445 92.7445 39.8358 40.1642Z"
				fill={props.fill ?? "#76FA9B"}
			/>
		</svg>
	);
}

export default BallonSvg;
