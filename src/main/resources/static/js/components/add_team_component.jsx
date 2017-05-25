var AddTeamComponent = React.createClass( {
    render: function() {
        return (
            <form className="form-border">
                <h3>Create new Team</h3>
                
                <label>Title:</label><br />
                <input className="form-control" type="text" value={this.props.team.team_title} onChange={this.props.onFieldChange('team_title')} /><br />
                <label>Description:</label><br />
                <input className="form-control" type="text" value={this.props.team.description} onChange={this.props.onFieldChange('description')} /><br />                 
                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}  >Create</button>
                <button className="btn btn-danger" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Cancel</button>
            </form>
        )
    }
});

AddTeamComponent.propTypes = {
    team: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
};

window.AddTeamComponent = AddTeamComponent;