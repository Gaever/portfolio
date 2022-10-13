import { Navbar, Tooltip } from "flowbite-react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export interface HeaderProps {}

function Header(props: HeaderProps) {
	const {} = props;

	return (
		<div className={styles["nav-container"]}>
			<div className="container mx-auto">
				<Navbar fluid rounded>
					<Link href="/">
						<a className="transition-all border-b-4 border-b-transparent hover:border-b-4 active:scale-105 hover:border-b-slate-200 logo self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							гайвер
						</a>
					</Link>
					<div className="flex md:order-2">
						<div className={styles.social}>
							<Tooltip content="Telegram: @gaever" style="light">
								<a
									href="https://t.me/gaever"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src="/telegram.svg"
										width="48px"
										height="48px"
										alt="telegram"
									/>
								</a>
							</Tooltip>
						</div>
					</div>
				</Navbar>
			</div>
		</div>
	);
}

export default Header;
