import { useNavigate } from 'react-router-dom';
import './RestaurantEntry.css';

type Props = {
	id: number;
	title: string;
	description: string;
	adress: string;
};

function RestaurantEntry(props: Props) {
	const navigate = useNavigate();

	const goToArticle = (id: number) => {
		navigate(`/articulo/${id}`);
	};

	const { description, adress, title, id } = props;
	return (
		<div>
			<div className="rankingInfo">
				<h2>{title}</h2>
				<p className="desc">{description}</p>
				<p className="dir">{adress}</p>
			</div>
			<div onClick={() => goToArticle(id)}>Ir al artículo</div>
		</div>
	);
}

export default RestaurantEntry;
