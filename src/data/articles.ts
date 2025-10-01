import img1 from '../assets/tortilla1.webp';
// import img2 from '../assets/tortilla2.jpeg';

type Article = {
	id: number;
	title: string;
	description: string;
	image: string;
	content: string;
	keyPoints: {
		date: string;
		cuajada: string;
		hasOnion: boolean;
		size: string;
		prize: string;
		hasBread: boolean;
		atmosphere: string;
		cleanliness: string;
		score: string;
	};
	location: {
		latitude: number;
		longitude: number;
	};
	adress: string;
};

export const articles: Article[] = [
	{
		id: 1,
		title: 'Hospital Universitario de Valdecilla',
		description: 'Tortilla jugosa con cebolla caramelizada',
		image: img1,
		content: `
La tortilla del Hospital Universitario de Valdecilla tiene ese sello inconfundible de ser “tortilla de hospital”: correcta, pero algo sosa y sin demasiada gracia en el sabor. Se nota que está pensada para un público amplio, y que prima la neutralidad por encima de la intensidad, lo cual hace que quede algo plana en boca.

En cuanto a la textura, la tortilla está bastante cuajada, con una consistencia firme que se mantiene bien en el plato. Sin embargo, a esa solidez se le añade un ligero regusto ácido que sorprende y no termina de encajar con la sencillez del conjunto, restándole atractivo a cada bocado.

Lo que equilibra la experiencia es todo lo que rodea al pincho: el personal de la cafetería es cercano y amable, transmitiendo una atención muy positiva para el volumen de gente que atienden a diario. El pan de acompañamiento resulta una grata sorpresa, fresco y de buena calidad, mientras que los baños destacan por su limpieza, lo que siempre se agradece en un entorno hospitalario.
`,
		keyPoints: {
			date: '2025-07-01',
			cuajada: 'Muy Cuajada',
			hasOnion: true,
			size: 'M',
			prize: '$',
			hasBread: true,
			atmosphere: 'activo',
			cleanliness: 'buena',
			score: '2,5/5',
		},
		location: {
			latitude: 43.456389,
			longitude: -3.829722,
		},
		adress: 'Calle Mayor, 15 - Madrid',
	},
];
