var MemberDescriptionContainer = React.createClass({
    getInitialState: function () {
        return {
            member: {
                id: this.props.params.id,
                name: '',
                surname: '',
                date_of_birth: '',
                address: '',
                position_id: ''
            }
        }
    },


    componentDidMount: function () {
        var self = this;
        var memberId = this.props.params.memberId;
        axios.get('/api/team/members/' + memberId).then(function (response) {
            self.setState({member: response.data});
        });
    },


    handleCancelClick() {
        this.context.router.push('/members/');
    },

    render: function () {
        return (
            <MemberDescriptionComponent
                member={this.state.member}
                onCancelClick={this.handleCancelClick}
            />
        );
    }
});

MemberDescriptionContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.MemberDescriptionContainer = MemberDescriptionContainer;