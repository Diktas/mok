
var AddPositionContainer = React.createClass( {
    getInitialState: function() {
        return {
            position: {
                position_title: '',
                earnings: '',
                bonus: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/position/', this.state.position).then(function () {
            console.log('position added');
            self.context.router.push('/positions');
          });
    },
    
    handleFieldChange: function(fieldName) {
        var self = this;
        return function(e) {
          var position = self.state.position;
          position[fieldName] = e.target.value;
          self.setState({ position: position });
        };
    },
    
    handleCancelClick() {
        this.context.router.push('/positions');
    },
      
    render: function() {
        return (
            <AddPositionComponent
                position={this.state.position}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

AddPositionContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddPositionContainer = AddPositionContainer;