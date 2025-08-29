import React from 'react';

function FilterBar({ onSearchChange, onFilterChange, propertyTypes }) {
    return (
        <div className="filter-bar">
            <input
                type="text"
                placeholder="Search by name or location..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">Filter by Type</option>
                {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
}

export default FilterBar;