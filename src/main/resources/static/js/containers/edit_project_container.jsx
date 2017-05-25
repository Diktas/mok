var EditProjectContainer = React.createClass( {
    getInitialState: function() {
        return {
            project: {
                dead_line: '',
                project_title: '',
                team_id: '',
                description: '',
                budget: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/project/', this.state.project).then(function () {
            console.log('item updated');
            self.context.router.push('/projects');
          });
    },
    
    componentDidMount: function() {
        var self = this;
        var projectId = this.props.params.projectId;
          axios.get('/api/project/' + projectId).then(function (response) {
            self.setState({ project: response.data });
          });
        
      },
    
    handleFieldChange: function(fieldName) {
        var self = this;
        return function(e) {
          var project = self.state.project;
          project[fieldName] = e.target.value;
          self.setState({ project: project });
        };
    },
    
    handleCancelClick() {
            this.context.router.push('/projects');
    },
      
    render: function() {
        return (
            <EditProjectComponent
                project={this.state.project}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

EditProjectContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.EditProjectContainer = EditProjectContainer;