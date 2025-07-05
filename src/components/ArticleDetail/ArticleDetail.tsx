import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../../data/articles';
import styles from './ArticleDetail.module.css';

export const ArticleDetail: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const article = articles.find((a) => a.id === id);

	if (!article) {
		return (
			<div className={styles.notFound}>
				<h1>Artículo no encontrado</h1>
				<button onClick={() => navigate(-1)}>Volver</button>
			</div>
		);
	}

	return (
		<div className={styles.articleContainer}>
			<img src={article.image} alt={article.title} />
			<h1>{article.title}</h1>
			<p>{article.content}</p>
			<button className={styles.backButton} onClick={() => navigate(-1)}>
				← Volver
			</button>
		</div>
	);
};
