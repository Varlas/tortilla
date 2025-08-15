import { useNavigate } from 'react-router-dom';
import './Rules.css';

export const Rules = () => {
	const navigate = useNavigate();

	return (
		<div className="rules">
			<h1>NORMAS</h1>
			<ul>
				<li>
					Evaluamos cada tortilla por separado independientemente de
					sus toppings
				</li>
				<li>
					Cada tortilla puede cambiar así que cada análisis se hará
					del día que se toma
				</li>
				<li>
					Nos centraremos en la tortilla básica y en rellenos de
					bonito y mayonesa
				</li>
				<li>El único acompañamiento será el pan</li>
				<li>La bebida será café, cerveza o agua para acompañarla</li>
			</ul>

			<button className="backButton" onClick={() => navigate('/')}>
				⬅ Volver
			</button>
		</div>
	);
};
