var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require('create-react-class');
var Person = createReactClass({
    getInitialState(){
        return { person: this.props.person };
    },
    render(){
        return (
            <div className="person clearfix">
                <div className="detail">
                    Name: {this.state.person.name } - Age: {this.state.person.age}
                </div>
                <div className="action">
                    <a href="#" onClick={this.delete}>Delete</a>
                </div>
            </div>
        );
    },
    delete(){
        this.props.deleteFunc(this.props.index);
    }
});
module.exports = Person;