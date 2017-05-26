var EditMemberContainer = React.createClass( {
    getInitialState: function() {
        return {
            member: {
                name: '',
                surname: '',
                date_of_birth: '',
                address: '',
                team_id: '',
                position_id: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/team/members', this.state.member).then(function () {
            console.log('member updated');
            self.context.router.push('/members/');
          });
    },
    
    componentDidMount: function() {
        var self = this;
        var memberId = this.props.params.memberId;
          axios.get('/api/team/members/' + memberId).then(function (response) {
            self.setState({ member: response.data });
          });
        
      },
    
    handleFieldChange: function(fieldName) {
        var self = this;
        return function(e) {
          var member = self.state.member;
          member[fieldName] = e.target.value;
          self.setState({ member: member });
        };
    },
    
    handleCancelClick() {
            this.context.router.push('/members/');
    },
      
    render: function() {
        return (
            <EditMemberComponent
                member={this.state.member}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

EditMemberContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.EditMemberContainer = EditMemberContainer;