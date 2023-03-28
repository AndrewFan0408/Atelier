import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RelatedItems from './RelatedItems';

const ComparisonTable = ({ current, relatedItems }) => {
  // create an array of all the unique characteristics for all the items
  const allCharacteristics = [...new Set(relatedItems.flatMap(item => Object.keys(item)))];

  return (
    <table>
      <thead>
        <tr>
          <th>{current.name}</th>
          <th>Characteristic</th>
          <th>Related Item</th>
        </tr>
      </thead>
      <tbody>
        {allCharacteristics.map((char) => (
          <tr key={char}>
            <td>{current[char] ? current[char] : ''}</td>
            <td>{char}</td>
            {relatedItems.map((item) => (
              <td key={item.id}>
                {item[char] ? (item[char] === current[char] ? '✓' : item[char]) : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;