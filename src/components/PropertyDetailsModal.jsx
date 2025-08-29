import React from 'react';

function PropertyDetailsModal({ property, onClose }) {
    if (!property) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{property.name}</h2>
                <img src={property.image} alt={property.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Price:</strong> ${parseInt(property.price).toLocaleString()}</p>
                <p>{property.description}</p>
            </div>
        </div>
    );
}

export default PropertyDetailsModal;