var TeamDescriptionContainer = React.createClass( {
    getInitialState: function() {
        return {
            team: {
                id: this.props.params.id,
                team_title: '',
                description: ''
            },
            member: {
                id: '',
                name: '',
                surname: '',
                date_of_birth: '',
                address: '',
                team_id: '',
                position_id: ''
            },
            members: []
        }
    },

    componentWillMount: function() {
        var self = this;
        var partyId = this.props.params.partyId;
        var teamId = this.props.params.teamId;
        axios.get('/api/team/' + teamId).then(function (response) {
            self.setState( { team: response.data } );
        } );
        axios.get( '/api/team/members/search?team_id=' + this.props.params.teamId )
            .then( function( response ) {
                self.setState( {
                    members: response.data
                } );
            } );
    },

    // Description
    handleMemberDescription: function( member ) {
        var self = this;
        return function() {
            self.context.router.push( '/members/description/' + member.id );
        }
    },


    handleCancelClick() {
        this.context.router.push( '/teams/' );
    },

    render: function() {
        return (
            <TeamDescriptionComponent
                member={this.state.member}
                members={this.state.members}
                team={this.state.team}
                onCancelClick={this.handleCancelClick}
                onDescriptionItemClick={this.handleMemberDescription}
            />
        );
    }
} );



TeamDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.TeamDescriptionContainer = TeamDescriptionContainer;