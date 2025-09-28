import img1 from '../assets/tortilla1.webp';
import img2 from '../assets/tortilla2.jpeg';

type Article = {
	id: number;
	title: string;
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
};

export const articles: Article[] = [
	{
		id: 1,
		title: 'Hospital Universitario de Valdecilla',
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
	},

	{
		id: 2,
		title: 'Casa Ajero',
		image: img2,
		content: `
La tortilla de Casa Ajero es un clásico del centro de Santander. Se distingue por su sabor casero y equilibrado, con un punto de sal bien medido y una jugosidad que se agradece en cada bocado. La presencia de cebolla le aporta dulzor y redondea el conjunto.

En cuanto a la textura, se presenta poco cuajada, casi melosa, lo que la hace ideal para quienes disfrutan de una tortilla jugosa. El corte deja escapar un interior cremoso que invita a repetir.

El ambiente del local es cálido y acogedor, con un servicio rápido y cercano. El pan que acompaña está siempre fresco y de buena calidad, y la limpieza del espacio resulta impecable.
`,
		keyPoints: {
			date: '2025-07-05',
			cuajada: 'Poco Cuajada',
			hasOnion: true,
			size: 'M',
			prize: '$$',
			hasBread: true,
			atmosphere: 'acogedor',
			cleanliness: 'muy buena',
			score: '4/5',
		},
		location: {
			latitude: 43.4618,
			longitude: -3.8102,
		},
	},
	{
		id: 3,
		title: 'La Casa del Indiano',
		image: img1,
		content: `
La Casa del Indiano ofrece una tortilla que apuesta por la sencillez y la calidad del producto. El sabor es intenso, con un buen equilibrio entre huevo y patata, ligeramente caramelizada gracias a la cebolla.

La textura es más bien firme, bien cuajada, pero sin perder jugosidad. Cada bocado mantiene una consistencia homogénea y agradable.

El entorno del restaurante destaca por su elegancia: decoración cuidada, ambiente tranquilo y un servicio atento que da valor añadido a la experiencia. El pan, artesano, completa un pincho que deja muy buen recuerdo.
`,
		keyPoints: {
			date: '2025-07-08',
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
			latitude: 43.4639,
			longitude: -3.8075,
		},
	},
	{
		id: 4,
		title: 'La Ramonoteca',
		image: img1,
		content: `
En La Ramonoteca la tortilla se convierte en un acompañamiento de lujo dentro de un local moderno y con carácter. Su sabor es potente, con un toque generoso de cebolla pochada que la hace especialmente sabrosa.

La textura tiende a lo jugoso, con el interior a medio cuajar que resulta muy atractivo para quienes disfrutan de la tortilla "al punto". El contraste entre el exterior dorado y el interior casi cremoso está muy bien logrado.

El ambiente es animado, con clientela diversa y un servicio dinámico. El pan de masa madre y la limpieza general del local refuerzan la buena impresión.
`,
		keyPoints: {
			date: '2025-07-12',
			cuajada: 'Jugosa',
			hasOnion: true,
			size: 'M',
			prize: '$$',
			hasBread: true,
			atmosphere: 'animado',
			cleanliness: 'muy buena',
			score: '4,2/5',
		},
		location: {
			latitude: 43.4645,
			longitude: -3.8051,
		},
	},
];
