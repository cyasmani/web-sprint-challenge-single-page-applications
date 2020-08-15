import React, {useState} from 'react';
import {
  Jumbotron, 
} from 'reactstrap';


function Confirmation(props) {

    const [data, setData] = useState();

    console.log(props)


        
    
    
return (

        <div>
            <Jumbotron>
                <h1 className="display-3">Congrats! Pizza is on its way!</h1>
                <p className="lead">below is your order</p>
                <hr className="my-2" />
                {/* <p>Name:{props.info.name}</p> 
                <p>{props.info.ham}</p>
                <p>{props.info.pepperoni}</p>
                <p>{props.info.pineapple}</p>
                <p>{props.info.bacon}</p>
                <p>Size:{props.info.sizes}</p>
                <p>Instructions: {props.info.instructions}</p>
                <p>Date Created: {props.info.createdAt}</p> */}

                
            

            </Jumbotron>
            
        </div>
    )
}


export default Confirmation
