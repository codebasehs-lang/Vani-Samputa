import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Articles.css';
import { articles } from './Articles';

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => String(a.id) === String(id));

  if (!article) {
    return (
      <div className="articles-main-app-bg">
        <h2>Article Not Found</h2>
        <button className="read-more-btn-app" onClick={() => navigate('/articles')}>Back to Articles</button>
      </div>
    );
  }

  return (
    <div className="articles-main-app-bg">
      <button className="read-more-btn-app" style={{marginBottom: '1em'}} onClick={() => navigate('/articles')}>← Back to Articles</button>
      <div className="article-detail-header-flex">
        <div className="article-detail-image-col">
          <img src={article.image} alt={article.title} className="article-detail-image" />
        </div>
        <div className="article-detail-title-col">
          <h1 className="article-detail-title">{article.title}</h1>
        </div>
      </div>
      <div className="article-detail-content-app" style={{whiteSpace: 'pre-line', marginTop: '2em'}}>{article.summary}</div>
    </div>
  );
}

export default ArticleDetail;
