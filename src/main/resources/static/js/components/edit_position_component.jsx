var EditPositionComponent = React.createClass( {
    render: function() {
        return (
            <form className="form-border">
                <h3>Update Position</h3>

                <label>Title:</label><br />
                    <input className="form-control" type="text" value={this.props.position.position_title} onChange={this.props.onFieldChange( 'position_title' )} /><br />
                    <label>Earnings:</label><br />
                    <input className="form-control" type="number" value={this.props.position.earnings} onChange={this.props.onFieldChange( 'earnings' )} /><br />
                    <label>Bonus:</label><br />
                    <input className="form-control" type="text" value={this.props.position.bonus} onChange={this.props.onFieldChange( 'bonus' )} /><br />
   
                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}  >Update</button>
                <button className="btn btn-danger" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}  >Cancel</button>
            </form>
        )
    }
} );

EditPositionComponent.propTypes = {
    position: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
};

window.EditPositionComponent = EditPositionComponent;