import React, { Component } from 'react';
import "./css/NavBar.css";
import aeroLablogo from "../aerolab-logo.svg"
import aeroLablogoWhite from "../aerolab-logo-white.svg"



export default class NavBar extends Component {

    constructor(){
        super()
        this.state={
            user:{}
        }}

componentDidMount(){
    fetch('https://coding-challenge-api.aerolab.co/user/me', { 
        headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE1YTNlNDQyNjM5YjAwMjEyY2MwOTciLCJpYXQiOjE2NDU1ODUzODB9.QU9YkOU8FLJZlFQYtCS9P9_vavVJKK5ucLCyICzaqKI'
      }}).then(res=>res.json())
        .then(res=>this.setState({
            user:res
        }))
};


  render() {
    
    return (
      <div className='NavBarContainer'>
        <img src={aeroLablogo} alt="logoaerolab" className='NavBarLogo'/>
        <div className='NavBarPoints'>
        <img src={aeroLablogoWhite} alt="coin" className='coinLogo'/>
        <p className='userPoints'>{this.state.user.points}</p>
        <div className='vector'></div>
        </div>
      </div>
    )
  }
}
