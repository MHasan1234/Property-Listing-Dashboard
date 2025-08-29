import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PropertyList from './components/PropertyList';
import AddPropertyForm from './components/AddPropertyForm';
import PropertyDetailsModal from './components/PropertyDetailsModal';
import FilterBar from './components/FilterBar';
import './App.css';

const API_URL = 'http://localhost:3001/properties';

function App() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');

    const fetchProperties = useCallback(async () => {
        try {
            const response = await axios.get(API_URL);
            setProperties(response.data);
            setFilteredProperties(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    }, []);

    useEffect(() => {
        fetchProperties();
    }, [fetchProperties]);

    useEffect(() => {
        let result = properties;
        if (filterType) {
            result = result.filter(p => p.type === filterType);
        }
        if (searchTerm) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredProperties(result);
    }, [searchTerm, filterType, properties]);

    const handleAddProperty = async (property) => {
        try {
            await axios.post(API_URL, property);
            fetchProperties(); // Re-fetch to get the updated list
        } catch (error) {
            console.error("Error adding property:", error);
        }
    };

    const handleViewDetails = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    return (
        <div className="App">
            <header>
                <h1>Mini Property Listing Dashboard</h1>
            </header>
            <main>
                <div className="main-content">
                    <div className="listings-section">
                        <h2>Property Listings</h2>
                        <FilterBar
                            onSearchChange={setSearchTerm}
                            onFilterChange={setFilterType}
                            propertyTypes={[...new Set(properties.map(p => p.type))]}
                        />
                        <PropertyList properties={filteredProperties} onViewDetails={handleViewDetails} />
                    </div>
                    <div className="form-section">
                        <AddPropertyForm onAddProperty={handleAddProperty} />
                    </div>
                </div>
            </main>
            {isModalOpen && (
                <PropertyDetailsModal property={selectedProperty} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default App;