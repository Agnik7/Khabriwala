import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  apiKey = '98109c5d509c42a19e4a4c6409df05cb'
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" category = "general"/>}/>
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" category = "general"/>}/>  
            <Route exact path="/health" element = {<News apiKey={this.apiKey} key="health" category = "health"/>}/>              
            <Route exact path="/business" element = {<News apiKey={this.apiKey} key="business" category = "business"/>}/>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category = "entertainment"/>}/>              
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" category = "science"/>}/>              
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" category = "technology"/>}/>              
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" category = "sports"/>}/>              
          </Routes>
        </Router>
      </>
    )
  }
}
