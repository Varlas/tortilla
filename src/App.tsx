import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ArticlesMasonry } from './components/ArticlesMasonry/ArticlesMasonry';
import './App.css';
import { ArticleDetail } from './components/ArticleDetail/ArticleDetail';
import { Rules } from './components/Rules/Rules';
import { Ranking } from './components/Ranking/Ranking';
import { TortillaSelector } from './components/TortillaSelector/TortillaSelector';
import { BarCard } from './components/BarCard/BarCard';
import { Map } from './components/Map/Map';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="/articulos" element={<ArticlesMasonry />} />
				<Route path="/articulo/:id" element={<ArticleDetail />} />
				<Route path="/normas" element={<Rules />} />
				<Route path="/ranking" element={<Ranking />} />
				<Route path="/selector" element={<TortillaSelector />} />
				<Route path="/bar" element={<BarCard />} />
				<Route path="/map" element={<Map />} />
			</Routes>
		</Router>
	);
}

export default App;
