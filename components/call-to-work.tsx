import styles from "./call-to-work.module.css";

export interface CallToWorkProps {
	onClick?: () => void;
}

function CallToWork(props: CallToWorkProps) {
	return (
		<button className={styles.container} onClick={props.onClick}>
			Поработаем?
		</button>
	);
}

export default CallToWork;
