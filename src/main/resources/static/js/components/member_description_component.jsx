
var MemberDescriptionComponent = React.createClass( {
    render: function() {

        var d = new Date( this.props.member.date_of_birth );
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        if ( month < 10 ) month = '0' + month;
        if ( date < 10 ) date = '0' + date;
        var fullDate = year + '-' + month + '-' + date;

        return (
            <div id="description" className="form-border">
                <h2 className="description-title">Member:<span style={{ color: 'black' }}>&nbsp;{this.props.member.name}&nbsp;{this.props.member.surname}</span></h2>
                <hr />

                <span className="description-title">Name:  </span><span>{this.props.member.name}</span><br />
                <span className="description-title">Surname:  </span><span>{this.props.member.surname}</span><br />
                <span className="description-title">Date Of Birth: </span><span>{fullDate}</span><br />                
                <span className="description-title">Address </span><span>{this.props.member.address}</span><br />
                <span className="description-title">Position ID: </span><span>{this.props.member.position_id}</span><br />
                <hr />
                <button id="MemberDescriptionCancel" className="btn btn-success" style={{ marginRight: '20px' }}
                    onClick={this.props.onCancelClick}>Back
                </button>
            </div>
        )
    }
} );


MemberDescriptionComponent.propTypes = {
    member: React.PropTypes.object.isRequired
};

window.MemberDescriptionComponent = MemberDescriptionComponent;