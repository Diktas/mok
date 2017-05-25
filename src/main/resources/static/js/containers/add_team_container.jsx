
var AddTeamContainer = React.createClass( {
    getInitialState: function() {
        return {
            team: {
                team_title: '',
                description: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/team', this.state.team).then(function () {
            console.log('team added');
            self.context.router.push('/teams');
          });
    },
    
    handleFieldChange: function(fieldName) {
        var self = this;
        return function(e) {
          var team = self.state.team;
          team[fieldName] = e.target.value;
          self.setState({ team: team });
        };
    },
    
    handleCancelClick() {
        this.context.router.push('/teams');
    },
      
    render: function() {
        return (
            <AddTeamComponent
                team={this.state.team}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

AddTeamContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddTeamContainer = AddTeamContainer;