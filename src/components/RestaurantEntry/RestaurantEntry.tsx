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
		<div className="entry">
			<div className="entryInfo">
				<h2>{title}</h2>
				<p className="desc">{description}</p>
				<p className="dir">{adress}</p>
			</div>
			<button className="button" onClick={() => goToArticle(id)}>
				Ir al artículo
			</button>
		</div>
	);
}

export default RestaurantEntry;
