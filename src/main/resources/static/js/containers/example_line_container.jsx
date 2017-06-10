

var ExampleLineContainer = React.createClass({

    getInitialState: function() {
        return {
            background: {backgroundColor: "white"},
            marked: false
        };
    },

    changeColor: function () {
        if (this.state.marked){
            this.setState({background: {backgroundColor: "white"}})
            this.setState({marked: !this.state.marked})
        } else {
            this.setState({background: {backgroundColor: "#ff9999"}})
            this.setState({marked: !this.state.marked})
        }
    },


    render: function () {
        return (
            <ExampleLineComponent
                key={this.props.id}
                id={this.props.id}                
                name={this.props.name}
                surname={this.props.surname}
                date={this.props.date}
                address={this.props.address}
                addForRemoval={this.props.addForRemoval}
                backgroundColor={this.state.background}
                changeColor={this.changeColor}
                removeFromArray={this.props.removeFromArray}
                marked={this.state.marked}
            />
        )
    }

});

window.ExampleLineContainer = ExampleLineContainer;