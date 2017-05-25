var TeamsContainer = React.createClass( {
    getInitialState: function() {
        return {
            teams: []
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get( '/api/team' )
            .then( function( response ) {
                self.setState( {
                    teams: response.data
                } );
            } );

    },


    // Add new team 
    handleAddTeam() {
        this.context.router.push( '/teams/create/' );
    },

    // Edit team 
    handleEditTeam: function( team ) {
        var self = this;
        return function() {
            self.context.router.push( '/teams/update/' + team.id );
        }
    },

    // Delete team
    handleRemoveTeam: function( team ) {
        var self = this;
        return function() {
            axios.delete( '/api/team/' + team.id ).then( function( response ) {
                self.componentWillMount();
            } );
        };
    },

    // Description
    handleTeamDescription: function( team ) {
        var self = this;
        return function() {
            self.context.router.push( '/teams/description/' + team.id );
        }
    },

    render: function() {
        return <TeamsComponent teams={this.state.teams} onAddClick={this.handleAddTeam} onEditItem={this.handleEditTeam}
            onRemoveItem={this.handleRemoveTeam} onDescriptionItemClick={this.handleTeamDescription} />
    }
} );

TeamsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.TeamsContainer = TeamsContainer;