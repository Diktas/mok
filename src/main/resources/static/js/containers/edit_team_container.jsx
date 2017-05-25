var EditTeamContainer = React.createClass( {
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
        axios.post('/api/team/', this.state.team).then(function () {
            console.log('team updated');
            self.context.router.push('/teams');
          });
    },
    
    componentDidMount: function() {
        var self = this;
        var teamId = this.props.params.teamId;
          axios.get('/api/team/' + teamId).then(function (response) {
            self.setState({ team: response.data });
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
            this.context.router.push('/projects');
    },
      
    render: function() {
        return (
            <EditTeamComponent
                team={this.state.team}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

EditTeamContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.EditTeamContainer = EditTeamContainer;