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


    // Add new project 
    handleAddProject() {
        this.context.router.push( '/projects/create' );
    },

    // Edit project 
    handleProjectEdit: function( project ) {
        var self = this;
        return function() {
            self.context.router.push( '/projects/update/' + project.id );
        }
    },

    // Remove project
    handleProjectRemove: function( project ) {
        var self = this;
        return function() {
            axios.delete( '/api/project/' + project.id ).then( function( response ) {
                self.componentWillMount();
            } );
        };
    },

    // Description
    handleProjectDescription: function( project ) {
        var self = this;
        return function() {
            self.context.router.push( '/projects/description/' + project.id );
        }
    },

    render: function() {
        return <ProjectsComponent projects={this.state.projects} onAddClick={this.handleAddProject} onEditItem={this.handleProjectEdit}
            onRemoveItem={this.handleProjectRemove} onDescriptionItemClick={this.handleProjectDescription} />
    }
} );

ProjectsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.ProjectsContainer = ProjectsContainer;