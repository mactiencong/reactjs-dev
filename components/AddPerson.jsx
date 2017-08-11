var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');

var AddPerson = createReactClass({
    render(){
        return(
            <div className="add-person">
                <input type="text" name="name" placeholder="Enter name" ref={name=>this.inputName=name} />
                <input type="text" name="age" placeholder="Enter Age" ref={age=>this.inputAge=age} />
                <button onClick={this.addPerson.bind(null, this)}>Add</button>
            </div>
        );
    },
    addPerson(){
        this.props.addFunc(this.inputName.value, this.inputAge.value);
    }
});
module.exports = AddPerson;