import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import CallToWork from "../components/call-to-work";
import Header from "../components/header";
import MainPageHero from "../components/main-page-hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Гайвер - IT консультант</title>
				<meta
					name="description"
					content="Автоматизация бизнес-процессов, fullstack разработка на javascript"
				/>
			</Head>

			<Header />

			<main>
				<section className={styles.main}>
					<div className="container mx-auto">
						<MainPageHero />
					</div>
					<div className="container mx-auto flex-1 flex items-end">
						<div
							className={classNames([
								styles.maxWidthContainer,
								"mb-20 w-full z-10",
							])}
						>
							<CallToWork onClick={() => {}} />
						</div>
						{/* <div className={styles.hr} /> */}
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
