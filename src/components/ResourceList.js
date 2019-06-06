import React from "react";
import axios from "axios";

const ResourceList = () => {

  fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  };

  return <div>{this.state.resources.length}</div>;
  
};

export default ResourceList;
