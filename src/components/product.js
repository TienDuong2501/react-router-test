import React, { Component } from 'react';

class Product extends Component {
  render() {
    var match = this.props;
    console.log(match);
    var name = match.params.name;
    return (
      <div>
        <h1>day la ten san pham : {name}</h1>
      </div>
    );
  }
}

export default Product;
