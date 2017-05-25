var TeamDescriptionContainer = React.createClass({
    getInitialState: function () {
        return {
            team: {
                id: this.props.params.id,
                team_title: '',
                description: ''
            },
//            member: {
//                id: '',
//                name: '',
//                sure_name: '',
//                date_of_birth: '',
//                address: '',
//                position_id: ''
//            },
           // members: []
        }
    },


    componentDidMount: function () {
        var self = this;
        var teamId = this.props.params.teamId;
        axios.get('/api/team/' + teamId).then(function (response) {
            self.setState({team: response.data});
        });
//        var partyId = this.props.params.partyId;
//        axios.get( '/api/parties/' + partyId ).then( function( response ) {
//            self.setState({ party: response.data });
//        });
    },


    handleCancelClick() {
        this.context.router.push('/teams/');
    },

    render: function () {
        return (
            <TeamDescriptionComponent
                team={this.state.team}
                onCancelClick={this.handleCancelClick}
            />
        );
    }
});

TeamDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.TeamDescriptionContainer = TeamDescriptionContainer;