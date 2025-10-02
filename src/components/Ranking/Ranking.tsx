import './Ranking.css';
import { articles } from '../../data/articles';
import RestaurantEntry from '../RestaurantEntry/RestaurantEntry';

export const Ranking = () => {
	const places = articles.map((item) => {
		return {
			id: item.id,
			title: item.title,
			description: item.description,
			adress: item.adress,
		};
	});

	return (
		<div className="ranking">
			<h1>Ranking de Tortillas</h1>
			<p>
				En este punto recogemos las que para nosotros son las mejores
				tortillas. Aquellas que merece la pena acercarte a probar.
			</p>
			<ul>
				{places.map((rest) => (
					<li key={rest.id}>
						<RestaurantEntry
							title={rest.title}
							description={rest.description}
							adress={rest.adress}
							id={rest.id}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
