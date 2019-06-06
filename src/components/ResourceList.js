import React, { useState, useEffect } from "react";
import axios from "axios";

//props.reource destructured to resource
const ResourceList = ({resource}) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  //everytime component both gets mounted and updated - the inner function will run
  useEffect(()=> {
      fetchResource(resource);
  }, [])

  return <div>{resources.length}</div>;
};

export default ResourceList;
