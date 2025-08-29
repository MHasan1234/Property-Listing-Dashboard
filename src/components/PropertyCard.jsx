import React from 'react';

function PropertyCard({ property, onViewDetails }) {
    return (
        <div className="card">
            <h3>{property.name}</h3>
            <p><strong>Type:</strong> {property.type}</p>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Price:</strong> ${parseInt(property.price).toLocaleString()}</p>
            <p>{property.description.substring(0, 60)}...</p>
            <button onClick={() => onViewDetails(property)}>View</button>
        </div>
    );
}

export default PropertyCard;