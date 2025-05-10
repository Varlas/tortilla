import styles from './Layout.module.css';
import tortilla2 from '../../assets/tortilla2.jpeg';
import tortilla1 from '../../assets/tortilla1.webp';
import canadio from '../../assets/canadio.webp';

export const Layout: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Un pincho de tortilla, por favor</h1>
			</div>
			<div className={styles.content}>
				<div className={styles.sidebar}>
					<img src={canadio} alt="Ranking" />
					<div className={styles.sidebarOverlay}>
						<h1>Ranking</h1>
					</div>
				</div>
				<div className={styles.main}>
					<div className={styles.topRow}>
						<div className={`${styles.box} ${styles.box6}`}>
							<img src={tortilla2} alt="Normas" />
							<div className={styles.overlay}>
								<h1>Recomiéndame una tortilla</h1>
							</div>
						</div>
						<div className={`${styles.box} ${styles.box7}`}>
							<img src={tortilla1} alt="Artículos" />
							<div className={styles.overlay}>
								<h1>Artículos</h1>
							</div>
						</div>
					</div>
					<div className={styles.bottomRow}>
						<div className={`${styles.box} ${styles.box8}`}>
							<img src={tortilla1} alt="Extra 1" />
							<div className={styles.overlay}>
								<h1>Normas</h1>
							</div>
						</div>
						<div className={`${styles.box} ${styles.box9}`}>
							<img src={tortilla2} alt="Extra 2" />
							<div className={styles.overlay}>
								<h1>Mapa</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
