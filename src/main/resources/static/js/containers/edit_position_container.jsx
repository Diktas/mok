var EditPositionContainer = React.createClass( {
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
            console.log('position updated');
            self.context.router.push('/positions');
          });
    },
    
    componentDidMount: function() {
        var self = this;
        var positionId = this.props.params.positionId;
          axios.get('/api/position/' + positionId).then(function (response) {
            self.setState({ position: response.data });
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
            this.context.router.push('/positions/');
    },
      
    render: function() {
        return (
            <EditPositionComponent
                position={this.state.position}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

EditPositionContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.EditPositionContainer = EditPositionContainer;