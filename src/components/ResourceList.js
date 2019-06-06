import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resources: [] };

  //componentDidMount only ever called one time 
  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

    this.setState({resources: response.data});
  }

  //componentDidMount called everytime component rerendered
  async componentDidUpdate(prevProps){
    
      //this check will stop the endless loop, has the resource type change? if so make another request
      if(prevProps.resource !== this.props.resource){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        //this will cause an endless loop and cause componentDidUpdate to endlessly be called
        this.setState({resources: response.data}); 
      }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
