import styles from './ArticlesMasonry.module.css';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import { articles } from '../../data/articles';

export const ArticlesMasonry: React.FC = () => {
	const navigate = useNavigate();

	const goToArticle = (id: number) => {
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
