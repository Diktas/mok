
var TeamsComponent = React.createClass( {
    render: function() {
        var self = this;
        var teams = this.props.teams.map( function( team, index ) {

            return (
                <tr key={index} >
                    <td>{team.id}</td>
                    <td>{team.team_title}</td>
                    <td>{team.description}</td>
                    <td style={{ width: '40px' }}>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( team )}
                            data-toggle="tooltip" data-placement="top" title="Edit team">
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id="TeamDelete" type="button" className="btn btn-default" onClick={self.props.onRemoveItem( team )}
                            data-toggle="tooltip" data-placement="top" title="Delete team">
                            <span className="glyphicon glyphicon-remove"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id={"TeamDescription" + team.id} type="button" className="btn btn-default"
                            onClick={self.props.onDescriptionItemClick( team )}
                            data-toggle="tooltip" data-placement="top" title="Team Description">
                            <span className="glyphicon glyphicon-info-sign"></span></button>
                    </td>
                </tr>
            );
        } );
        return (
            <div>
                <button className="btn btn-success" onClick={this.props.onAddClick}  >Create new Team</button>
                <div className="panel panel-default">

                    <div className="panel-heading">Teams</div>
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>Description</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
} );

TeamsComponent.propTypes = {
    teams: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired
};

window.TeamsComponent = TeamsComponent;