import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
  state = {
    product: {},
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`);
    this.setState({ product: response.data });
  }

  goHome = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { product } = this.state;
    return (
      <div className="product-body">
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            url: <a href={product.url}>{product.url}</a>
          </p>
        </div>
        <div className="actions">
          <button onClick={this.goHome}>voltar a página de produtos</button>
        </div>
      </div>
    );
  }
}
