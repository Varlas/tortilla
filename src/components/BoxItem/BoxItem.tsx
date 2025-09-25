import styles from '../Layout/Layout.module.css';
import { useNavigate } from 'react-router-dom';

interface BoxItemProps {
	image: string;
	title: string;
	alt?: string;
	extraClass?: string;
	link?: string; // NUEVO
}

export const BoxItem: React.FC<BoxItemProps> = ({
	image,
	title,
	alt = '',
	extraClass = '',
	link,
}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (link) navigate(link);
	};

	return (
		<div
			className={`${styles.box} ${extraClass}`}
			onClick={handleClick}
			style={{ cursor: link ? 'pointer' : 'default' }}
		>
			<img src={image} alt={alt} />
			<div className={styles.overlay}>
				<h1>{title}</h1>
				<p>Ver más</p>
			</div>
		</div>
	);
};
