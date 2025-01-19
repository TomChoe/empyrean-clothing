import React from 'react';
import DirectoryItem from '../directoryitem';
import { CATEGORIES } from '../../categories-data';
import './directory.styles.scss';

const Directory = () => {
  return (
    <div className="directory-container">
      {CATEGORIES.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Directory