import img1 from '../assets/tortilla1.webp';
import img2 from '../assets/tortilla2.jpeg';

export const articles = [
	{
		id: '1',
		title: 'Hospital Universitario de Valdecilla',
		image: img1,
		content: `
La tortilla del Hospital Universitario de Valdecilla tiene ese sello inconfundible de ser “tortilla de hospital”: correcta, pero algo sosa y sin demasiada gracia en el sabor. Se nota que está pensada para un público amplio, y que prima la neutralidad por encima de la intensidad, lo cual hace que quede algo plana en boca.

En cuanto a la textura, la tortilla está bastante cuajada, con una consistencia firme que se mantiene bien en el plato. Sin embargo, a esa solidez se le añade un ligero regusto ácido que sorprende y no termina de encajar con la sencillez del conjunto, restándole atractivo a cada bocado.

Lo que equilibra la experiencia es todo lo que rodea al pincho: el personal de la cafetería es cercano y amable, transmitiendo una atención muy positiva para el volumen de gente que atienden a diario. El pan de acompañamiento resulta una grata sorpresa, fresco y de buena calidad, mientras que los baños destacan por su limpieza, lo que siempre se agradece en un entorno hospitalario.
`,
		keyPoints: {
			fecha: '2025-07-01',
			cuajada: 'Cuajada',
			cebolla: 'Con cebolla',
			tamaño: 'Medio',
			precio: '$',
			pan: 'incluido',
			ambiente: 'activo',
			limpieza: 'buena',
			valoracion: '2,5/5'
		},
	},
	{ id: "2", title: "Cafetería Sol y Sombra", image: img2, content: "La tortilla de Sol y Sombra destaca por su tamaño generoso y su sabor intenso. El punto de sal es correcto, aunque en ocasiones puede resultar un poco aceitosa.\n\nLa textura es consistente, más tirando a cuajada, pero con un interior todavía jugoso. Se nota el uso de patata de buena calidad.\n\nEl local es animado, con un ambiente tradicional y camareros rápidos y atentos. El pan acompaña de manera correcta, y los baños cumplen con lo esperado.", keyPoints: { fecha: "2025-01-15", cuajada: "Medio cuajada", cebolla: "Sin cebolla", local: "Centro histórico" } },
     { id: "3", title: "Bar La Esquina Dorada", image: img1, content: "La tortilla tiene un sabor equilibrado, aunque sin grandes sorpresas. Es correcta, pero no memorable.\n\nEn cuanto a textura, está bastante cuajada y tiende a ser seca en algunos trozos.\n\nEl personal es muy simpático y cercano, lo que mejora la experiencia general. El pan que ofrecen está tierno y el local se mantiene bastante limpio.", keyPoints: { fecha: "2025-03-02", cuajada: "Muy cuajada", cebolla: "Con cebolla", local: "Barrio residencial" } },
	 { id: "4", title: "Restaurante El Portón", image: img2, content: "Una tortilla con un punto casero que se agradece. El sabor es suave y agradable, con el toque justo de cebolla.\n\nLa textura es cremosa en el centro, lo que la hace especialmente apetecible.\n\nEl personal es muy formal, y el pan de hogaza que la acompaña es excelente. Los baños son amplios y cuidados.", keyPoints: { fecha: "2025-02-20", cuajada: "Poco cuajada", cebolla: "Con cebolla", local: "Restaurante familiar" } },
	 { id: "5", title: "Bar Deportivo", image: img1, content: "La tortilla aquí cumple con su función de ser un bocado rápido. No destaca en sabor, bastante neutro y simple.\n\nLa textura es firme, totalmente cuajada.\n\nEl ambiente es bullicioso, ideal para ver partidos. El pan es corriente, y los baños, aunque pequeños, se mantienen limpios.", keyPoints: { fecha: "2025-04-08", cuajada: "Muy cuajada", cebolla: "Sin cebolla", local: "Bar deportivo" } },
	 { id: "6", title: "Mesón La Encina", image: img2, content: "Una tortilla con mucho sabor, gracias al punto de cebolla caramelizada. Resulta jugosa y sabrosa.\n\nLa textura es intermedia, ni muy líquida ni demasiado seca.\n\nEl personal es cercano y amable. El pan de pueblo que la acompaña es un plus. Los baños, correctos y funcionales.", keyPoints: { fecha: "2025-06-01", cuajada: "Medio cuajada", cebolla: "Con cebolla", local: "Mesón tradicional" } },
	 { id: "7", title: "Cafetería Central", image: img1, content: "Tortilla sencilla, bien ejecutada y sin demasiados artificios. Ideal para desayunos rápidos.\n\nLa textura es más bien seca, pero acompaña bien con café o refrescos.\n\nEl personal es correcto y rápido. El pan es del día, sin destacar especialmente. Los baños están limpios aunque algo antiguos.", keyPoints: { fecha: "2025-03-19", cuajada: "Muy cuajada", cebolla: "Sin cebolla", local: "Cafetería céntrica" } },
	 { id: "8", title: "Bar Los Amigos", image: img2, content: "Una tortilla con carácter, ligeramente salada pero muy sabrosa. Tiene un punto que engancha.\n\nLa textura es melosa, con el centro poco cuajado.\n\nEl trato es cercano y familiar. El pan crujiente recién hecho es un acierto. Los baños cumplen con las expectativas.", keyPoints: { fecha: "2025-05-10", cuajada: "Poco cuajada", cebolla: "Con cebolla", local: "Bar de barrio" } }


];
