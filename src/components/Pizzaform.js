import React, {useState, useEffect} from 'react'
import { Jumbotron} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pizzaform.css'
import {Route, Link, Switch} from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'
import Confirmation from './Confirmation';

function Pizzaform() {
    
    const [formData, setFormData] = useState({
        name: '',
        ham: '',
        pepperoni:'',
        pineapple:'',
        bacon:'',
        sizes: '',
        instructions:''
    })

    const [users, setUsers] = useState([]);

    const [serverError, setServerError] = useState("");

    const [errors, setErrors] = useState({
        name: '',

        
    })

    const validateChange = e =>{
        Yup.reach(validationSchema, e.target.name)
        .validate(e.target.name === "ham" ? e.target.checked : e.target.value)
        .then((value) => {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });

        })
        .catch((err) => {
            console.log(err);
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })
        
    }

    const onSubmit = e => {
        e.preventDefault();
        axios
        .post("https://reqres.in/api/users", formData)
        .then((res) => {
          console.log("success!", res.data);
          setUsers(res.data);
          setServerError(null);
  

          setFormData({
            name: "",
            ham:"",
            pepperoni:'',
            pineapple:'',
            bacon:'',
            sizes:"",
            instructions:""


          });
        })
        .catch(err => {
            
            setServerError("Network Failed!");
          });
        
    
    }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required').min(2, "Must be at least 2 characters"),
        sizes:Yup.string().required('Required'),
        instructions:Yup.string().required('Required'),
        ham: Yup.boolean().oneOf([true], "Please select topping"),
        pepperoni: Yup.boolean().oneOf([true], "Please select topping"),
        bacon: Yup.boolean().oneOf([true], "Please select topping"),
        pineapple: Yup.boolean().oneOf([true], "Please select topping")
    })
    

        const inputChange = e =>{
            e.persist();
    
    
            const newFormData ={
                ...formData,
                [e.target.name]: e.target.checked === "checkbox" ? e.target.checked : e.target.value 
            }
            validateChange(e)
            setFormData(newFormData)
        }

        console.log(users)
    


    return (
        <div>
            <Jumbotron>
                <div className="main">
                        <div className="Header">
                            <h2>Form Submission</h2>
                        </div>
                        <form onSubmit={onSubmit} className="box">
                            <label htmlFor='name'>Name
                                <input onChange={inputChange} value={formData.name} type="text" id='name' name='name'></input>
                                {errors.name.length > 0 ? <p>{errors.name}</p> :null}
                            </label>
                            <label for="sizes">Choose Your Size</label>
                                <select name="sizes" id="sizes" onChange={inputChange}>
                                    <option value="default">Choose Size Below</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="extra large">Extra Large</option>
                                </select>
                            <br></br>
                            <label htmlFor="ham">Ham
                                <input type="checkbox" id="ham" name='ham'
                                    
                                 onChange={inputChange} ></input>
                            </label>
                            <label htmlFor="pepperoni">Pepperoni
                                <input type="checkbox" id="pepperoni" name='pepperoni'
                                 onChange={inputChange} ></input>
                                
                            </label>
                            <label htmlFor="pineapple">Pineapple
                                <input type="checkbox" id="pineapple" name='pineapple'
                                 onChange={inputChange} ></input>
                            </label>  
                            <label htmlFor="bacon">Bacon
                                <input type="checkbox" id="bacon" name='bacon'
                                onChange={inputChange} ></input>
                            </label> 
                            <br></br>
                            <label htmlFor="instructions">
                                Special Instructions
                            <br></br>
                                <textarea name="instructions" value={formData.instructions}placeholder="instructions" onChange={inputChange}></textarea> 
                            </label>
                                
                            <button type="submit">Order</button>
                            {/* <Link to="/confirmation"><button  type="submit">Place Order</button></Link>
                            <Route path="/confirmation" component={Confirmation}>
                                    <Confirmation info={users}/>
                            </Route> */}
                            
                            <br></br>
                            <div className="info">
                                <pre>{JSON.stringify(users, null, 2)}</pre>
                            </div>
                        </form>
                        <form onSubmit={onSubmit}>
                            {serverError ? <p className="error">{serverError}</p> : null}   
                        </form>

                </div> 
            </Jumbotron>      
        </div>
    )
}

export default Pizzaform