import img1 from '../assets/tortilla1.webp';
import img2 from '../assets/tortilla2.jpeg';

export const articles = [
	{
		id: '1',
		title: 'Historia de la Tortilla',
		image: img1,
		content: `
La tortilla de patatas es el alma de muchos hogares y bares en España. Su historia es tan rica como su sabor...

Durante el siglo XIX, se convirtió en un símbolo de la cocina humilde pero sabrosa.
`,
		keyPoints: {
			fecha: '2025-07-01',
			cuajada: 'Sin cuajar',
			cebolla: 'Con cebolla',
			local: 'Bar La Pequeña',
		},
	},
	{
		id: '2',
		title: 'Recetas Tradicionales',
		image: img2,
		content: `
Esta receta es un clásico. Solo necesitas huevos, patata, sal y aceite de oliva.

¿El truco? La paciencia, y dejar que cada ingrediente brille.
`,
		keyPoints: {
			fecha: '2025-06-15',
			cuajada: 'Poco cuajada',
			cebolla: 'Sin cebolla',
			local: 'Casa Pepe',
		},
	},
];
