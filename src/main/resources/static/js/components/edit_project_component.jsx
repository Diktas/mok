var EditProjectComponent = React.createClass( {
    render: function() {
        return (
                <form className="form-border">
                <h3>Update Project</h3>
                
                <label >Title:</label><br />
                <input className="form-control" type="text" value={this.props.project.project_title} onChange={this.props.onFieldChange('project_title')} /><br />
                <label>Team ID:</label><br />
                <input className="form-control" type="number" value={this.props.project.team_id} onChange={this.props.onFieldChange('team_id')} /><br /> 
                <label>Description:</label><br />
                <input className="form-control" type="text" value={this.props.project.description} onChange={this.props.onFieldChange('description')} /><br />
                <label>Budget:</label>
                <input className="form-control" type="number" value={this.props.project.budget} onChange={this.props.onFieldChange('budget')}/><br />
                <label>Dead Line:</label><br />
                <input className="form-control" type="date" value={this.props.project.dead_line} onChange={this.props.onFieldChange('dead_line')} /><br /> 
                
                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}  >Update</button>
                <button className="btn btn-danger" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Cancel</button>
            </form>
        )
    }
});

EditProjectComponent.propTypes = {
    project: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
};

window.EditProjectComponent = EditProjectComponent;