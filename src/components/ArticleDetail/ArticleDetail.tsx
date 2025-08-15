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

	const { image, title, content, keyPoints } = article;

	return (
		<div className={styles.articleLayout}>
			<div className={styles.leftPanel}>
				<img src={image} alt={title} className={styles.articleImage} />
				<div className={styles.keyPoints}>
					<h2>Detalles</h2>
					<ul>
						<li>
							<strong>Fecha:</strong> {keyPoints.fecha}
						</li>
						<li>
							<strong>Cuajada:</strong> {keyPoints.cuajada}
						</li>
						<li>
							<strong>Cebolla:</strong> {keyPoints.cebolla}
						</li>
						<li>
							<strong>Lugar:</strong> {keyPoints.local}
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.rightPanel}>
				<h1>{title}</h1>
				<p>{content}</p>
				<button
					className={styles.backButton}
					onClick={() => navigate(-1)}
				>
					← Volver
				</button>
			</div>
		</div>
	);
};
