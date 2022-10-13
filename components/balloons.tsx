import BalloonAvatar from "./balloon-avatar";
import BallonSvg from "./balloon-svg";
import styles from "./balloons.module.css";
import Basket from "./basket";

export interface BalloonsProps {}

export interface BalloonProps {
	balloonColor?: string;
	basketColor?: string;
	basketVariant?: "triangle" | "square";
	showBasket?: boolean;
	x?: number;
	y?: number;
	scale?: number;
	backgroundImage?: string;
}

function Balloon(props: BalloonProps) {
	return (
		<div
			className={styles.balloonContainer}
			style={{
				top: props.y ?? 0,
				left: props.x ?? 0,
				...(props.scale
					? {
							transform: `scale(${props.scale})`,
							transformOrigin: "top left",
					  }
					: null),
			}}
		>
			{props.backgroundImage ? (
				<BalloonAvatar src="photo.png" />
			) : (
				<BallonSvg fill={props.balloonColor} />
			)}
			{props.basketVariant && props.showBasket ? (
				<div className="mt-3">
					<Basket variant={props.basketVariant} />
				</div>
			) : null}
		</div>
	);
}

function Balloons(props: BalloonsProps) {
	const {} = props;

	return (
		<div className={styles.container}>
			<Balloon
				balloonColor="#76FA9B"
				x={0}
				y={200}
				scale={0.9}
				basketVariant="triangle"
				showBasket
			/>
			<Balloon
				balloonColor="#A876FA"
				x={230}
				y={380}
				scale={0.7}
				basketVariant="square"
				showBasket
			/>
			<Balloon backgroundImage="photo.png" scale={1.25} x={60} />
		</div>
	);
}

export default Balloons;
