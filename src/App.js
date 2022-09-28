import { useState } from 'react';

import { Blueprint } from './components/Blueprint/Blueprint';
import { Filters } from './components/Filters/Filters';

import './App.css';

export const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  return (
    <div className="App">
      <Filters selectedFilters={selectedFilters} setSelectedFilters={(filters) => setSelectedFilters(filters)} />
      <Blueprint selectedFilters={selectedFilters} />
    </div>
  );
}