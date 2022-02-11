import React from 'react'
import { PartProps } from '../types'

const Part = ({part}:PartProps) => {
    const assertNever = (value: never): never => {
      throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
      );
    };
    switch (part.type) {
        case 'normal':
          return (
            <>
              <h4>
                {part.name} {part.exerciseCount}
              </h4>
              <p>{part.description}</p>
            </>
          );
         case 'groupProject':
             return(<><h4>{part.name} {part.exerciseCount}</h4><p>project Exercises {part.groupProjectCount}</p></>)
         case 'submission':
             return(<><h4>{part.name} {part.exerciseCount}</h4><p>{part.description}</p><p>{part.exerciseSubmissionLink}</p></>)
         case 'special':
             return (<><h4>{part.name} {part.exerciseCount}</h4><p>{part.description}</p><p>required skills: {(part.requirements).join(', ')}</p></>);
             default:
            return assertNever(part);
    }
}

export default Part
