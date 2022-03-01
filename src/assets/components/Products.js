import React, { Component } from 'react';
import "./css/Products.css";
import coinsvg from "../icons/coin.svg"



export default class Products extends Component {

    constructor(){
        super()
        this.state={
            productos:{},
            loaded:false
        }}

        componentDidMount(){
            fetch('https://coding-challenge-api.aerolab.co/products', { 
                headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE1YTNlNDQyNjM5YjAwMjEyY2MwOTciLCJpYXQiOjE2NDU1ODUzODB9.QU9YkOU8FLJZlFQYtCS9P9_vavVJKK5ucLCyICzaqKI'
              }}).then(res=>res.json())
                .then(res=>this.setState({
                    productos:res,
                    loaded:true
                }))
        };

  render() {
    console.log(this.state.productos[3])
    return (
        <div>
        {this.state.loaded?
      <div className='ProductsContainer'>
          <div><h1 className='titleProducts' id='productos'>TECH <span className='titleProductsBlack'>PRODUCTS</span></h1></div>
          {this.state.productos.map(function(item){
             return <div className='product' key={item.id}>
                        <div className='productCard'>
                            <div className='pictureFrame'>
                                <img src={item.img.url}/>
                            </div>
                            <div className='productDetail'>
                                <h2 className='productTitle'>{item.name}</h2>
                                <p className='productCategory'>{item.category}</p>
                            </div>
                        </div>
                        <div className='parentRedeem'>
                            <button href='#' className='redeemForBtn'>Redeem for {item.cost}<img src={coinsvg} className="coinsvg"/></button>
                            
                        </div>
                    </div>
          })}
          
      </div>
      :
      <p>cargando</p>}
      </div>
      
    )
  }
}
