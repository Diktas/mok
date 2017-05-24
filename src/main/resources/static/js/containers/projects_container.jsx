var ProjectsContainer = React.createClass( {
    getInitialState: function() {
        return {
            projects: []
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get( '/api/project' )
            .then( function( response ) {
                self.setState( {
                    projects: response.data
                } );
            } );

    },


    // Add new project mygtuko paspaudimo action
    handleAddProject() {
        this.context.router.push( '/add-project' );
    },

    // Edit project mygtuko action
    handleProjectEdit: function( project ) {
        var self = this;
        return function() {
            self.context.router.push( '/project/edit/' + project.id );
        }
    },

    render: function() {
        return <ProjectsComponent projects={this.state.projects} onAddClick={this.handleAddProject} onEditItem={this.handleProjectEdit} />
    }
} );

ProjectsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ProjectsContainer = ProjectsContainer;