// BarCard.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import './BarCard.css';

export const BarCard = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const bar = location.state?.bar;

	if (!bar) {
		return (
			<div className="barCard">
				<p>No hay recomendación disponible.</p>
			</div>
		);
	}

	return (
		<div className="barCard">
			<h1>{bar.nombre}</h1>
			<p className="direccion">{bar.direccion}</p>
			<p className="descripcion">{bar.descripcion}</p>
			<button className="volverBoton" onClick={() => navigate('/')}>
				⬅ Volver
			</button>
		</div>
	);
};
