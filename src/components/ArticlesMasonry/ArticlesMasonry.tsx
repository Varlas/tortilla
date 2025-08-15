import styles from './ArticlesMasonry.module.css';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/tortilla1.webp';
import img2 from '../../assets/tortilla2.jpeg';

const articles = [
	{ id: '1', title: 'Historia de la Tortilla', image: img1 },
	{ id: '2', title: 'Recetas Tradicionales', image: img2 },
	{ id: '3', title: 'Tortillas Modernas', image: img1 },
	{ id: '4', title: 'Ingredientes Clave', image: img2 },
	{ id: '5', title: 'La tortilla sin cebolla', image: img1 },
	{ id: '6', title: 'Tortilla y vino', image: img2 },
];

export const ArticlesMasonry: React.FC = () => {
	const navigate = useNavigate();

	const goToArticle = (id: string) => {
		navigate(`/articulo/${id}`);
	};

	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	return (
		<div className={styles.masonryWrapper}>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className={styles.myMasonryGrid}
				columnClassName={styles.myMasonryGridColumn}
			>
				{articles.map((article) => (
					<div
						key={article.id}
						className={styles.masonryItem}
						onClick={() => goToArticle(article.id)}
					>
						<img src={article.image} alt={article.title} />
						<div className={styles.titleOverlay}>
							{article.title}
						</div>
					</div>
				))}
			</Masonry>
		</div>
	);
};
