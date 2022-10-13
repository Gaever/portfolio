import React from "react";

export interface BasketSvgProps {
	fill?: string;
	width?: number;
	height?: number;
	variant: "triangle" | "square";
}

function BallonSvg(props: BasketSvgProps) {
	if (props.variant === "triangle") {
		return (
			<svg
				width={props.width?.toString?.() ?? "80"}
				height={props.height?.toString?.() ?? "70"}
				viewBox="0 0 80 70"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M44.3301 67.5C42.4056 70.8333 37.5944 70.8333 35.6699 67.5L1.02886 7.50001C-0.895651 4.16668 1.50997 7.73604e-06 5.35898 7.39955e-06L74.641 1.34273e-06C78.49 1.00623e-06 80.8956 4.16666 78.9711 7.5L44.3301 67.5Z"
					fill={props.fill || "#D9D9D9"}
				/>
			</svg>
		);
	}

	if (props.variant === "square") {
		return (
			<svg
				width={props.width?.toString?.() ?? "100"}
				height={props.height?.toString?.() ?? "100"}
				viewBox="0 0 100 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="100" height="100" rx="5" fill={props.fill || "#D9D9D9"} />
			</svg>
		);
	}

	return null;
}

export default BallonSvg;
