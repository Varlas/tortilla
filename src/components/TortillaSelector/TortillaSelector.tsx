// TortillaSelector.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TortillaSelector.css';

export const TortillaSelector = () => {
	const navigate = useNavigate();

	const filtros = {
		cuajada: ['Muy cuajada', 'Cuajada', 'Poco cuajada'],
		tipos: ['Muchos tipos de tortilla', 'Pocos tipos de tortilla'],
		cebolla: ['Con cebolla', 'Sin cebolla'],
		restaurante: ['Cafetería', 'Restaurante'],
		bocadillo: ['Sí', 'Indiferente'],
	};

	const [seleccion, setSeleccion] = useState({});

	const toggleOpcion = (categoria, opcion) => {
		setSeleccion((prev) => ({
			...prev,
			[categoria]: opcion,
		}));
	};

	const recomendar = () => {
		// Simulación de búsqueda
		const barRecomendado = {
			nombre: 'Casa Paco',
			direccion: 'Calle Mayor, 15 - Madrid',
			descripcion: 'Tortilla jugosa con cebolla caramelizada.',
		};
		navigate('/bar', { state: { bar: barRecomendado } });
	};

	return (
		<div className="tortillaSelector">
			<h1>Elige tu tortilla ideal</h1>
			{Object.entries(filtros).map(([categoria, opciones]) => (
				<div key={categoria} className="filtroGrupo">
					<h2>
						{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
					</h2>
					<div className="botonesGrupo">
						{opciones.map((op) => (
							<button
								key={op}
								className={`filtroBoton ${seleccion[categoria] === op ? 'activo' : ''}`}
								onClick={() => toggleOpcion(categoria, op)}
							>
								{op}
							</button>
						))}
					</div>
				</div>
			))}
			<button className="recomendarBoton" onClick={recomendar}>
				Recomendar
			</button>
		</div>
	);
};
