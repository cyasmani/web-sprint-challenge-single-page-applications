import React from 'react';
import {

  Jumbotron, 
  Button

} from 'reactstrap';
import "../styles/homepage.css"
import pizzahutimage from "../images/pizzahutimage.jpg"
import {Route, Link, Switch} from 'react-router-dom'
import Pizzaform from './Pizzaform';

function Homepage() {
    return (
        <div>
            <div className="Container">
                <Jumbotron>
                <h1 className="display-3">Welcome To Pizza Planet</h1>
                <img src={pizzahutimage} className="pizzahutimage"/>
                <p className="lead">Better Ingredients, Better Pizza, Pizza Planet</p>
                <hr className="my-2" />
                <p>Wide variety of different pizza styles for your choosing!</p>
                <p className="lead">
                    <Link to="/pizza">Order Now</Link>
                    <Route path="/pizza" component={Pizzaform}></Route>
                </p>
                </Jumbotron>
            </div>
            <footer class="page-footer font-small blue">

        
                <div class="footer-copyright text-center py-3">© 2020 Copyright: Pizza Planet
                <a href="https://www.apple.com/legal/internet-services/terms/site.html"> Terms of Use</a>
                </div>
        

            </footer>
            
        </div>
    )
}

export default Homepage