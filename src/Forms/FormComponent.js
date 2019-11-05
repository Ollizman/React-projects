import React from "react"
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

function FormPrac2(props) { 
                
        return (
            <main>
                <form onSubmit={props.handleSubmit}>
                    <input placeholder="First Name" 
                        onChange={props.handleChange}
                        name= 'firstName'
                        value= {props.data.firstName}                        
                        /><br />

                    <input placeholder="Last Name" 
                        onChange={props.handleChange}
                        name= 'lastName'
                        value= {props.data.lastName}  
                    /><br />

                    <input placeholder="Age" 
                        onChange={props.handleChange}
                        name= 'age'
                        value= {props.data.age}
                    /><br />
                    <label>
                    <input
                        type='radio'
                        onChange={props.handleChange}
                        name= 'gender'
                        value= 'male'
                        checked= {props.data.gender === 'male'}
                    /> Male
                    </label>
                    <label>
                    <input 
                        type='radio'
                        onChange={props.handleChange}
                        name= 'gender'
                        value= 'female'
                        checked= {props.data.gender === 'female'}
                    /> Female
                    </label>
                    {/* Create radio buttons for gender here */}
                    <br />
                    <select name='destination' onChange={props.handleChange} value={props.data.destination}>
                        <option> --select-- </option>
                        <option> Europe </option>
                        <option> Asia </option>
                        <option> Australia </option>
                        <option> Central America </option>
                    </select>
                    {/* Create select box for location here */}
                    <br />
                    
                    
                        <label>
                           <input
                           type='checkbox' 
                           name='vegetarian' 
                           checked= {props.data.diets.vegetarian}
                           onChange={props.handleChange}
                           /> Vegetarian
                        </label>
                        <label>
                           <input
                           type='checkbox' 
                           name='vegan' 
                           checked= {props.data.diets.vegan}
                           onChange={props.handleChange}
                           /> Vegan
                        </label>
                        <label>
                           <input
                           type='checkbox' 
                           name='meatlover' 
                           checked= {props.data.diets.meatlover}
                           onChange={props.handleChange}
                           /> Meat-Lover
                        </label>
                        <label>
                           <input
                           type='checkbox' 
                           name='lactose' 
                           checked= {props.data.diets.lactose}
                           onChange={props.handleChange}
                           /> Lactose
                        </label>
                       
                  
                     
                 
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName + ' ' + props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>
                    Your dietary restrictions: <br />
                    {props.data.diets.vegetarian && 'Vegetarian - '}
                    {props.data.diets.vegan && 'Vegan - '} 
                    {props.data.diets.meatlover && 'Meat-Lover - '} 
                    {props.data.diets.lactose && 'Lactose-handicap'} 
                </p>
            </main>
        )
    }


export default FormPrac2