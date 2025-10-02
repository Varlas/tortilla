import img1 from '../assets/tortilla1.webp';
import valdecilla from '../assets/valdecilla.jpg';
import img2 from '../assets/tortilla2.jpeg';

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
		image: valdecilla,
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
	{
		id: 2,
		title: 'Plaza Porticada',
		description: 'Tortilla clásica al estilo tradicional',
		image: img1, // asegúrate de importar/definir esta imagen
		content: `
La tortilla de la cafetería en la Plaza Porticada es un ejemplo claro de lo que se espera en un lugar céntrico: rápida, abundante y sin demasiadas pretensiones. El sabor es correcto, con una textura intermedia que no desagrada, aunque tampoco emociona.

Lo mejor es la ubicación y el ambiente que rodea al local, ideal para ver pasar a la gente mientras disfrutas de un pincho. El pan, sin embargo, no acompaña demasiado: algo reseco y sin personalidad.
`,
		keyPoints: {
			date: '2025-07-02',
			cuajada: 'Media',
			hasOnion: true,
			size: 'L',
			prize: '$$',
			hasBread: false,
			atmosphere: 'turístico',
			cleanliness: 'normal',
			score: '3/5',
		},
		location: {
			latitude: 43.4632,
			longitude: -3.8101,
		},
		adress: 'Plaza Porticada, Santander',
	},

	{
		id: 3,
		title: 'Playa del Sardinero',
		description: 'Pincho con vistas al mar',
		image: img2,
		content: `
Una tortilla que destaca más por el entorno que por sí misma. Servida en un chiringuito del Sardinero, tiene un punto jugoso pero con exceso de aceite. El sabor es agradable, aunque no muy intenso.

La experiencia gana puntos por el ambiente costero: sentarse con el mar de fondo mientras comes siempre suma. El servicio es rápido, aunque algo impersonal.
`,
		keyPoints: {
			date: '2025-07-03',
			cuajada: 'Jugosa',
			hasOnion: false,
			size: 'M',
			prize: '$$',
			hasBread: true,
			atmosphere: 'playero',
			cleanliness: 'aceptable',
			score: '3,2/5',
		},
		location: {
			latitude: 43.4741,
			longitude: -3.7803,
		},
		adress: 'Playa del Sardinero, Santander',
	},

	{
		id: 4,
		title: 'Mercado del Este',
		description: 'Tortilla casera con buen pan',
		image: img1,
		content: `
En pleno centro de Santander, la tortilla del Mercado del Este sorprende con su punto casero y la calidad de sus ingredientes. Bien equilibrada entre jugosidad y cuajado, con la cebolla en su punto justo.

El pan que la acompaña es excelente y marca la diferencia. El ambiente es bullicioso pero agradable, ideal para tomar algo en un entorno histórico.
`,
		keyPoints: {
			date: '2025-07-04',
			cuajada: 'En su punto',
			hasOnion: true,
			size: 'M',
			prize: '$$',
			hasBread: true,
			atmosphere: 'bullicioso',
			cleanliness: 'muy buena',
			score: '4/5',
		},
		location: {
			latitude: 43.4625,
			longitude: -3.8078,
		},
		adress: 'Calle Hernán Cortés, 4 - Santander',
	},

	{
		id: 5,
		title: 'Palacio de la Magdalena',
		description: 'Tortilla cuidada en un entorno único',
		image: img2,
		content: `
La tortilla en la cafetería cercana al Palacio de la Magdalena tiene un nivel superior al promedio: sabor intenso, bien equilibrada y con un punto de cocción que la hace muy agradable.

El enclave es inmejorable, con vistas privilegiadas y un ambiente tranquilo. Aunque el precio es algo más elevado, la experiencia lo justifica.
`,
		keyPoints: {
			date: '2025-07-05',
			cuajada: 'En su punto',
			hasOnion: true,
			size: 'L',
			prize: '$$$',
			hasBread: true,
			atmosphere: 'tranquilo',
			cleanliness: 'excelente',
			score: '4,5/5',
		},
		location: {
			latitude: 43.4697,
			longitude: -3.7664,
		},
		adress: 'Av. de la Reina Victoria, s/n - Santander',
	},
];
