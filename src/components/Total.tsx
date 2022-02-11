import React from 'react'

interface TotalExerciseProps{
    exerciseCount: number
}

const Total = ({ exerciseCount }: TotalExerciseProps) => {
  return <div>
      Number of exercises 
       {exerciseCount}
      </div>;
};

export default Total
