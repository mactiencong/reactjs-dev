var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');
var AddPerson = require("./AddPerson.jsx");
var Person = require("./Person.jsx");
var PersonList = createReactClass({
    getInitialState(){
        return {
            persons:[
                { name: "matico", age: 29 },
                { name: "congmt", age: 29 }
            ]
        };
    },
    delete(index){
        this.state.persons.splice(index,1);
        this.setState(this.state);
    },
    add(name, age){
        this.state.persons.push({name: name, age: age});
        this.setState(this.state);
    },
    render(){
        return(
            <div className="person-list">
                <AddPerson addFunc={this.add} />
                {this.state.persons.map((person, index)=>{
                    return <Person key={index} index={index} person={person} deleteFunc={this.delete.bind(null, this)} />
                })}
            </div>
        );
    }
});
module.exports = PersonList;