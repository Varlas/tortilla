import styles from './Layout.module.css';
import tortilla2 from '../../assets/tortilla2.jpeg';
import tortilla1 from '../../assets/tortilla1.webp';
import canadio from '../../assets/canadio.webp';
import { BoxItem } from '../BoxItem/BoxItem';

const topItems = [
	{
		image: tortilla2,
		title: 'Recomendaciones',
		alt: 'Recomendaciones',
		extraClass: styles.box6,
		link: '/selector',
	},
	{
		image: tortilla1,
		title: 'Articulos',
		alt: 'articulos',
		extraClass: styles.box7,
		link: '/articulos',
	},
];

const bottomItems = [
	{
		image: tortilla1,
		title: 'Sobre el proyecto',
		alt: 'Normas',
		extraClass: styles.box8,
		link: '/about',
	},
	{
		image: tortilla2,
		title: 'Mapa',
		alt: 'Mapa',
		extraClass: styles.box9,
		link: '/map',
	},
];

export const Layout: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Un pincho de tortilla, por favor</h1>
			</div>
			<div className={styles.content}>
				{/* LATERAL IZQUIERDO */}
				<BoxItem
					image={canadio}
					title="Ranking"
					alt="Ranking"
					link="/ranking"
					extraClass={styles.sidebar}
				/>

				{/* CONTENIDO PRINCIPAL */}
				<div className={styles.main}>
					<div className={styles.topRow}>
						{topItems.map((item, i) => (
							<BoxItem key={i} {...item} />
						))}
					</div>
					<div className={styles.bottomRow}>
						{bottomItems.map((item, i) => (
							<BoxItem key={i} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);


};
