var MembersContainer = React.createClass( {
    getInitialState: function() {
        return {
            members: []
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get( '/api/team/members' )
            .then( function( response ) {
                self.setState( {
                    members: response.data
                } );
            } );

    },


    // Add new member 
    handleAddMember() {
        this.context.router.push( '/members/create/' );
    },

    // Edit member
    handleEditMember: function( member ) {
        var self = this;
        return function() {
            self.context.router.push( '/members/update/' + member.id );
        }
    },

    // Remove project
    handleRemoveMember: function( member ) {
        var self = this;
        return function() {
            axios.delete( '/api/team/members/' + member.id ).then( function( response ) {
                self.componentWillMount();
            } );
        };
    },

    // Description
    handleMemberDescription: function( member ) {
        var self = this;
        return function() {
            self.context.router.push( '/members/description/' + member.id );
        }
    },

    render: function() {
        return <MembersComponent members={this.state.members} onAddClick={this.handleAddMember} onEditItem={this.handleEditMember}
            onRemoveItem={this.handleRemoveMember} onDescriptionItemClick={this.handleMemberDescription} />
    }
} );

MembersContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.MembersContainer = MembersContainer;