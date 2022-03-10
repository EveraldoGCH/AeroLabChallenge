import React, { Component } from 'react';
import "./css/Products.css";
import coinsvg from "../icons/coin.svg"
import leftarrowsvg from "../icons/arrow-left.svg"
import rightarrowsvg from "../icons/arrow-right.svg"



export default class Products extends Component {

    constructor(){
        super()
        this.state={
            productos:[],
            loaded:false,
            derecha:8,
            izquierda:0,
            pagina:1
        }}

        clicDerecha(){
            if(this.state.derecha<32){
                this.setState({
                    derecha:this.state.derecha+8,
                    izquierda:this.state.izquierda+8,
                    pagina:this.state.pagina+1
                })
            }
        };

        clicIzquierda(){
            if(this.state.izquierda>0){
                this.setState({
                    derecha:this.state.derecha-8,
                    izquierda:this.state.izquierda-8,
                    pagina:this.state.pagina-1
                })
            }
        };


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
    console.log(this.state.izquierda)
    return (
        <div>
        {this.state.loaded?
      <div className='ProductsContainer'>
          <div id='productosInicio'><h1 className='titleProducts' id='productos'>TECH <span className='titleProductsBlack'>PRODUCTS</span></h1></div>
          {
        
          this.state.productos.slice(this.state.izquierda, this.state.derecha).map(function(item){
             return <><div className='product' key={item.id}>
                        <div className='productCard'>
                            <div className='pictureFrame'>
                                <img src={item.img.url} alt="productIMG"/>
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
                    </>
          })}
        <div className='pager'>
            <img src={leftarrowsvg} href="#productosInicio" alt="flechaizq" className='flechaizq' onClick={() => {this.clicIzquierda(); window.location.replace("#productosInicio")}}/>
            <p className='page'>Page {this.state.pagina} of 4</p>
            <img src={rightarrowsvg} alt="flechader" className='flechader' onClick={() => {this.clicDerecha() ; window.location.replace("#productosInicio")}}/>
        </div>
        <p className='page'>{this.state.izquierda} of {this.state.derecha} products</p>
      </div>
      :
      <p>cargando</p>
      }
      </div>
      
    )
  }
}
