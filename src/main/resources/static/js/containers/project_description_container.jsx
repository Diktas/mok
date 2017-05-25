var ProjectDescriptionContainer = React.createClass({
    getInitialState: function () {
        return {
            project: {
                id: this.props.params.id,
                dead_line: '',
                project_title: '',
                team_id: '',
                description: '',
                budget: ''
            }
        }
    },


    componentDidMount: function () {
        var self = this;
        var projectId = this.props.params.projectId;
        axios.get('/api/project/' + projectId).then(function (response) {
            self.setState({project: response.data});
        });
    },


    handleCancelClick() {
        this.context.router.push('/projects/');
    },

    render: function () {
        return (
            <ProjectDescriptionComponent
                project={this.state.project}
                onCancelClick={this.handleCancelClick}
            />
        );
    }
});

ProjectDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ProjectDescriptionContainer = ProjectDescriptionContainer;