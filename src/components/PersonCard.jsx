// import React, { Component } from 'react';

import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.person.lastName }, { props.person.firstName }</h1>
            <p>Age: { props.person.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
    }

    export default PersonCard;

// render(){
//     return(
//         <div className = "card">
//                 <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {this.props.person.hairColor}</p>
//         <button className ="bday" onClick={() => this.setState({age: this.state.age +1})}>Birthday Button for {this.props.person.firstName}</button>

                
//             </div>
//         );
//     }
// }
                        // export default class PersonCard extends Component{
                        //     constructor(props){
                        //         super(props);
                        //         this.state = {
                        //             age: this.props.person.age
                        //         }
                        
                        //     }