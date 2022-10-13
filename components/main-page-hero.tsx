import Balloons from "./balloons";
import styles from "./main-page-hero.module.css";

function MainPageHero() {
	return (
		<div className="relative">
			<div
				style={{
					position: "absolute",
					right: 0,
					top: 0,
					transform: "translateX(-420px)",
				}}
			>
				<Balloons />
			</div>
			<div className="relative">
				<h1 className={styles.title}>Web-разработчик на js и IT-консультант</h1>

				<p className={styles.description}>
					Привет! Меня зовут Евгений Рязанцев. Гайвер (gaever) – мой никнейм. Я
					15 лет разрабатываю нестандартные проекты на javascript для небольших
					стартапов и крупных компаний.
				</p>
			</div>
		</div>
	);
}

export default MainPageHero;
