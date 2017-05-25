
var PositionsComponent = React.createClass( {
    render: function() {
        var self = this;
        var positions = this.props.positions.map( function( position, index ) {

            return (
                <tr key={index} >
                    <td>{position.id}</td>
                    <td>{position.position_title}</td>
                    <td>{position.earnings}</td>
                    <td>{position.bonus}</td>
                    <td style={{ width: '40px' }}>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( position )}
                            data-toggle="tooltip" data-placement="top" title="Edit position" >
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id="PositionDelete" type="button" className="btn btn-default" onClick={self.props.onRemoveItem( position )}
                            data-toggle="tooltip" data-placement="top" title="Delete position">
                            <span className="glyphicon glyphicon-remove"></span></button>
                    </td>                    
                </tr>
            );
        } );
        return (
            <div>
                <button className="btn btn-success" onClick={this.props.onAddClick}  >Create new Position</button>
                <div className="panel panel-default">

                    <div className="panel-heading">Positions</div>
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>EARNINGS</th>
                                <th>Bonus</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {positions}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
} );

PositionsComponent.propTypes = {
    positions: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired
};

window.PositionsComponent = PositionsComponent;