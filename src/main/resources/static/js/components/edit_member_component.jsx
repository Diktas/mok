var EditMemberComponent = React.createClass( {
    render: function() {
        return (
            <form className="form-border">
                <h3>Update Member</h3>

                <label>Name:</label><br />
                <input className="form-control" type="text" value={this.props.member.name} onChange={this.props.onFieldChange( 'name' )} /><br />
                <label>Surname:</label><br />
                <input className="form-control" type="text" value={this.props.member.surname} onChange={this.props.onFieldChange( 'surname' )} /><br />
                <label>Date Of Birth:</label><br />
                <input className="form-control" type="date" value={this.props.member.date_of_birth} onChange={this.props.onFieldChange( 'date_of_birth' )} /><br />
                <label>Address:</label><br />
                <input className="form-control" type="text" value={this.props.member.address} onChange={this.props.onFieldChange( 'address' )} /><br />
                <label>Position ID:</label><br />
                <input className="form-control" type="number" value={this.props.member.position_id} onChange={this.props.onFieldChange( 'position_id' )} /><br />

                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}  >Update</button>
                <button className="btn btn-danger" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Cancel</button>
            </form >
        )
    }
} );

EditMemberComponent.propTypes = {
    member: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
};

window.EditMemberComponent = EditMemberComponent;