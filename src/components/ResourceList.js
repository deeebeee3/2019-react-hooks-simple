import React from "react";
import useResources from './useResources';



//props.resource destructured to resource - will either be 'posts' or 'todos'
const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
