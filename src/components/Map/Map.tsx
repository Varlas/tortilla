import { useEffect, useRef, useState } from 'react';
import { articles } from '../../data/articles';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon
const customIcon = new L.Icon({
	iconUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177361.png',
	iconSize: [35, 35],
	iconAnchor: [17, 34],
	popupAnchor: [0, -34],
});

export const Map = () => {
	const [visiblePlaces, setVisiblePlaces] = useState(articles);
	const visiblePlacesRef = useRef(articles);

	// Componente auxiliar que escucha cambios en el mapa
	const MapEventHandler = () => {
		const map = useMap();

		useEffect(() => {
			const updateVisible = () => {
				const bounds = map.getBounds();
				const filtered = articles.filter((item) =>
					bounds.contains([
						item.location.latitude,
						item.location.longitude,
					]),
				);

				const isEqual =
					filtered.length === visiblePlacesRef.current.length &&
					filtered.every(
						(item, index) =>
							item.id === visiblePlacesRef.current[index].id,
					);

				if (!isEqual) {
					visiblePlacesRef.current = filtered;
					setVisiblePlaces(filtered);
				}
			};

			updateVisible(); // inicial
			map.on('moveend', updateVisible);

			return () => {
				map.off('moveend', updateVisible);
			};
		}, [map]);

		return null;
	};

	return (
		<div className="flex gap-4">
			{/* Mapa */}
			<div className="w-2/3">
				<h1 className="text-xl font-bold mb-2">Mapa de Artículos</h1>
				<MapContainer
					center={[43.4623, -3.80998]}
					zoom={14}
					style={{
						height: '500px',
						width: '100%',
						borderRadius: '1rem',
						overflow: 'hidden',
					}}
					minZoom={12}
					maxZoom={18}
					maxBounds={[
						[43.4, -3.9], // suroeste de Santander
						[43.5, -3.7], // noreste de Santander
					]}
					maxBoundsViscosity={1.0} // fuerza el rebote en los límites
				>
					<TileLayer
						attribution="&copy; OpenStreetMap"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{articles.map((p) => (
						<Marker
							key={p.id}
							position={[
								p.location.latitude,
								p.location.longitude,
							]}
							icon={customIcon}
						>
							<Popup>
								<strong>{p.title}</strong>
							</Popup>
						</Marker>
					))}
					<MapEventHandler />
				</MapContainer>
			</div>

			{/* Listado dinámico */}
			<div className="w-1/3 overflow-y-auto max-h-[500px] pr-2">
				<h2 className="text-xl font-bold mb-2">Sitios visibles</h2>
				{visiblePlaces.length > 0 ? (
					<ul className="space-y-4">
						{visiblePlaces.map((p) => (
							<li
								key={p.id}
								className="border rounded-lg p-2 shadow-sm"
							>
								{p.title}
							</li>
						))}
					</ul>
				) : (
					<p className="text-gray-500">
						No hay sitios en esta vista.
					</p>
				)}
			</div>
		</div>
	);
};
