import styles from "./balloon-avatar.module.css";

export interface BalloonAvatarProps {
	src: string;
	width?: number;
	height?: number;
}

function BalloonAvatar(props: BalloonAvatarProps) {
	const width = props.width ? `${props.width?.toString?.()}px` : "270px";
	const height = props.height ? `${props.height?.toString?.()}px` : "322px";

	return (
		<div
			style={{
				backgroundImage: `url(${props.src})`,
				width,
				height,
			}}
			className={styles.container}
		/>
	);
}

export default BalloonAvatar;
