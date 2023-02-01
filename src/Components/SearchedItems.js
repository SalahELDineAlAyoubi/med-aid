import React from 'react'
import { useLocation } from 'react-router-dom';
import DisplayCardsMed from './DisplayCardsMed';

const SearchedItems = () => {
    const location = useLocation();
    const state = location.state;
    const medData = state.medData;
  return (
    <div>
      <DisplayCardsMed medData={medData} />
    </div>
  )
}

export default SearchedItems
