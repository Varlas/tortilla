// components/BoxItem.tsx
import styles from '../Layout/Layout.module.css';

interface BoxItemProps {
	image: string;
	title: string;
	alt?: string;
	extraClass?: string;
}

export const BoxItem: React.FC<BoxItemProps> = ({
	image,
	title,
	alt = '',
	extraClass = '',
}) => (
	<div className={`${styles.box} ${extraClass}`}>
		<img src={image} alt={alt} />
		<div className={styles.overlay}>
			<h1>{title}</h1>
		</div>
	</div>
);
