import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ArticlesMasonry } from './components/ArticlesMasonry/ArticlesMasonry';
import './App.css';
import { ArticleDetail } from './components/ArticleDetail/ArticleDetail';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="/articulos" element={<ArticlesMasonry />} />
				<Route path="/articulo/:id" element={<ArticleDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
