
var AddMemberContainer = React.createClass( {
    getInitialState: function() {
        return {
            member: {
                name: '',
                surname: '',
                date_of_birth: '',
                address: '',
                position_id: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api/team/members', this.state.member).then(function () {
            console.log('member added');
            self.context.router.push('/members');
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
        this.context.router.push('/members');
    },
      
    render: function() {
        return (
            <AddMemberComponent
                member={this.state.member}
                onSaveClick={this.handleSaveClick}
                onCancelClick={this.handleCancelClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

AddMemberContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddMemberContainer = AddMemberContainer;