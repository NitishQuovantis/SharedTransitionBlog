import React from 'react';
import BmiCard from './Card';

const BmiList = ({BmiData, onCardClicked}) => {
  console.log('rendering bmilist');

  return (
    <React.Fragment>
      {BmiData.map((data, index) => {
        return (
          <BmiCard
            key={data.name}
            index={index}
            data={data}
            onCardClicked={onCardClicked}
          />
        );
      })}
    </React.Fragment>
  );
};

export default BmiList;
