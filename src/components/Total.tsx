import React from 'react'
import { TotalExerciseProps } from '../types';



const pText = " Number of exercises";

const Total = ({ exerciseCount }: TotalExerciseProps) => {
  return <div>
     
       {pText} {exerciseCount}
      </div>;
};

export default Total
