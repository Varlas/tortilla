import './Ranking.css';

export const Ranking = () => {
	const restaurantes = [
		{
			nombre: 'Casa Paco',
			descripcion: 'Tortilla jugosa con cebolla caramelizada',
			direccion: 'Calle Mayor, 15 - Madrid',
		},
		{
			nombre: 'El Rincón de la Tortilla',
			descripcion: 'Clásica y cremosa, al punto perfecto',
			direccion: 'Av. del Sol, 22 - Salamanca',
		},
		{
			nombre: 'La Abuela María',
			descripcion: 'Receta tradicional con patata gallega',
			direccion: 'Praza Maior, 3 - Lugo',
		},
	];

	return (
		<div className="ranking">
			<h1>Ranking de Tortillas</h1>
			<ul>
				{restaurantes.map((rest, index) => (
					<li key={index}>
						<div className="rankingNumber">{index + 1}</div>
						<div className="rankingInfo">
							<h2>{rest.nombre}</h2>
							<p className="desc">{rest.descripcion}</p>
							<p className="dir">{rest.direccion}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
