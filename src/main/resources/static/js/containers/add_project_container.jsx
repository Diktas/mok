var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (date < 10) {
            date = '0' + date;
        }
        var fullDate = year + '-' + month + '-' + date;


var AddProjectContainer = React.createClass( {
    getInitialState: function() {
        return {
            project: {
                dead_line: fullDate,
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
        axios.post('/api/project', this.state.project).then(function () {
            console.log('project added');
            self.context.router.push('/projects');
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
            <AddProjectComponent
                project={this.state.project}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

AddProjectContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddProjectContainer = AddProjectContainer;