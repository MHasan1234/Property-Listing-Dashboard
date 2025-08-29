import React from 'react';
import PropertyCard from './PropertyCard';

function PropertyList({ properties, onViewDetails }) {
    if (properties.length === 0) {
        return <p>No properties found.</p>;
    }
    return (
        <div className="property-list">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} onViewDetails={onViewDetails} />
            ))}
        </div>
    );
}

export default PropertyList;