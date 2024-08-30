import React from 'react';
import { Link } from 'react-router-dom';

const GigCard: React.FC<{ gig: any }> = ({ gig }) => {
  const imageUrl = (path: string) => `${process.env.REACT_APP_API_URL}/${path}`;
  return (
    <div className="border rounded-lg p-4">
      <Link to={`/gigs/${gig.id}`}>
        <img src={imageUrl(gig.coverImage)} alt={gig.title} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-xl font-bold">{gig.title}</h2>
        <p>{gig.shortDesc}</p>
      </Link>
    </div>
  );
};

export default GigCard;
