import React, { useState, useEffect } from "react";
import axios from "axios";

//props.resource destructured to resource - will either be 'posts' or 'todos'
const ResourceList = ({resource}) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  //useEffect will always be called whenever component rendered
  //when component first gets rendered - the inner function will run 
  //between subsequent renders, if the value in the array (second arg) is different - the inner function will run
  //if a second argument is not provided (array) then the inner function will run 100% of the time...
  //so no array - 100% of time, an empty array - one time, an array with resource - runs only if different
  useEffect(()=> {
      fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
