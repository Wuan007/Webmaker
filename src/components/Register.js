import React, { Component } from "react";
import "./App.css";
export default class Registers extends Component {
    onSubmit = e => {
        e.preventdefault();
        const {username, password, password2} = this.state;
    this.register(username, password, password2);
        }
    
    register(username,password,password2) {
        // Does passwords match
        if(password !== password2) {
            alert("The passwords are not match");
            return;
        }
    }
}
