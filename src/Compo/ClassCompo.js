import React, { Component } from "react";



class ClassCompo extends Component {
    render() {
        return (
            <div id="box-2">
                <h1>This is created using Class component</h1>
         <p>This is done using external Css</p>
         <p style={{color:"blue"}}>This is done using inline css</p>
         
            </div>
        );
    }
}
export default ClassCompo;