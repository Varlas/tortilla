import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '../../data/articles';
import './ArticleDetail.css'; // Usaremos CSS modular simple aquí

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="notFound">
        <h1>Artículo no encontrado</h1>
        <button className="backButton" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    );
  }

  const { image, title, content, keyPoints } = article;

  return (
    <div className="articleLayout">
      {/* PANEL IZQUIERDO */}
      <div className="leftPanel">
        <img src={image} alt={title} className="articleImage" />
        <div className="keyPoints">
          <h2>Detalles</h2>
          <ul>
            {Object.entries(keyPoints).map(([key, value]) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PANEL DERECHO */}
      <div className="rightPanel">
        <h1>{title}</h1>
        <p>{content}</p>
        <button className="backButton" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
    </div>
  );
};
