
var MembersComponent = React.createClass( {
    render: function() {
        var self = this;
        var members = this.props.members.map( function( member, index ) {

            //  date
            var d = new Date( member.date_of_birth );
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            // jei menuo vienzenklis sk tai prieki bus 0 pvz: 03
            if ( month < 10 )
                month = '0' + month;

            if ( date < 10 )
                date = '0' + date;

            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr key={index} >
                    <td>{member.id}</td>
                    <td>{member.name}</td>
                    <td>{member.surname}</td>
                    <td>{fullDate}</td>
                    <td>{member.address}</td>
                    <td>{member.team_id}</td>
                    <td>{member.position_id}</td>
                    <td style={{ width: '40px' }}>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( member )}
                            data-toggle="tooltip" data-placement="top" title="Edit member">
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id="MemberDelete" type="button" className="btn btn-default" onClick={self.props.onRemoveItem( member )}
                            data-toggle="tooltip" data-placement="top" title="Delete member">
                            <span className="glyphicon glyphicon-remove"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id={"MemberDescription" + member.id} type="button" className="btn btn-default"
                            onClick={self.props.onDescriptionItemClick( member )}
                            data-toggle="tooltip" data-placement="top" title="Member Description">
                            <span className="glyphicon glyphicon-info-sign"></span></button>
                    </td>
                </tr>
            );
        } );
        return (
            <div>
                <button className="btn btn-success" onClick={this.props.onAddClick}  >Add new Member</button>
                <div className="panel panel-default">

                    <div className="panel-heading">Members</div>
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Date Of Birth</th>
                                <th>Address</th>
                                <th>Team ID</th>
                                <th>Position ID</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {members}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
} );

MembersComponent.propTypes = {
    members: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired
};

window.MembersComponent = MembersComponent;