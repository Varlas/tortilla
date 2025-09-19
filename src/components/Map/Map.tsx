import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icono personalizado (opcional, puedes cambiar la imagen)
const customIcon = new L.Icon({
	iconUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177361.png', // Puedes poner un icono de tortilla
	iconSize: [35, 35],
	iconAnchor: [17, 34],
	popupAnchor: [0, -34],
});

export const Map = () => {
	const sitios = [
		{
			nombre: 'Casa Paco',
			lat: 43.463,
			lng: -3.804,
			descripcion: 'Tortilla jugosa con cebolla caramelizada',
		},
		{
			nombre: 'La Abuela María',
			lat: 43.466,
			lng: -3.81,
			descripcion: 'Receta tradicional con patata gallega',
		},
		{
			nombre: 'El Rincón de la Tortilla',
			lat: 43.46,
			lng: -3.81,
			descripcion: 'Clásica y cremosa, al punto perfecto',
		},
	];

	return (
		<div className="mapaArticulos">
			<h1>Mapa de Artículos</h1>
			<MapContainer
				center={[43.4623, -3.80998]}
				zoom={14}
				style={{
					height: '500px',
					width: '100%',
					borderRadius: '1rem',
					overflow: 'hidden',
				}}
			>
				<TileLayer
					attribution="&copy; OpenStreetMap"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{sitios.map((s, i) => (
					<Marker key={i} position={[s.lat, s.lng]} icon={customIcon}>
						<Popup>
							<strong>{s.nombre}</strong>
							<br />
							{s.descripcion}
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};
