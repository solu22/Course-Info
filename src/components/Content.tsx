import React from 'react'
import { ContentProps } from '../types';
import Part from './Part';



const Content = ({courseParts}: ContentProps) => {
    return (
      <>
        {courseParts.map((part)=><Part key = {part.name} part = {part}/> )}
      </>
    );
}

export default Content
