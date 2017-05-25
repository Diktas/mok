
var TeamDescriptionComponent = React.createClass( {
    render: function() {

        //        var self = this;
        //        var membersList = this.props.team_members.map( function( member, index ) {
        //
        //            // date
        //            var d = new Date( member.date_of_birth );
        //            var year = d.getFullYear();
        //            var month = d.getMonth() + 1;
        //            var date = d.getDate();
        //            if ( month < 10 ) { month = '0' + month; }
        //            if ( date < 10 ) { date = '0' + date; }
        //            var fullDate = year + '-' + month + '-' + date;
        //
        //            return (
        //                <tr id="membersList" key={index}>
        //                    <td>{member.id}</td>
        //                    <td>{member.name}</td>
        //                    <td>{member.surename}</td>                    
        //                    <td>{fullDate}</td>
        //                    <td>{member.address}</td>
        //                    <td>{member.position_id}</td>
        //                    <td style={styles.width}>
        //                        <button id={"MemberInfo" + member.id} type="button" className="btn btn-default"
        //                            onClick={self.props.onDescriptionItemClick( member )}
        //                            data-toggle="tooltip" data-placement="top" title="Member description">
        //                            <span className="glyphicon glyphicon-info-sign"></span></button>
        //                    </td>
        //                </tr>
        //            );
        //        });
        //
        //        return (
        //            <div className="">
        //                <h2> Team members </h2>
        //                <div></div>
        //                <div></div>
        //                
        //                <div className="panel panel-default">
        //                    <table id="Members_Lits" className="table table-striped">
        //                        <thead>
        //                            <tr>
        //                                <th>ID</th>
        //                                <th>NAME</th>
        //                                <th>SURENAME</th>
        //                                <th>DATE OF BIRTH</th>
        //                                <th>ADDRESS</th>
        //                                <th>POSITION ID</th>
        //                                <th></th>
        //
        //                            </tr>
        //                        </thead>
        //                        <tbody>
        //                            {membersList}
        //                        </tbody>
        //                    </table>
        //                </div>
        //                <div>
        //                    <button id="PartyInfoReturn" className="btn btn-success" style={{ marginRight: '20px' }}
        //                        onClick={this.props.onCancelClick}>Back
        //                    </button>
        //                </div>
        //            </div>
        //
        //        )

        return (
            <div id="team_description" className="form-border">
                <h2 className="description-title">Team:<span style={{ color: 'black' }}>&nbsp;{this.props.team.team_title}</span></h2>
                <hr />

                <span className="description-title">About Team: </span><span>{this.props.team.description}</span><br />
                <hr />
                <button id="TeamDescriptionCancel" className="btn btn-success" style={{ marginRight: '20px' }}
                    onClick={this.props.onCancelClick}>Back
                </button>
              
                    
                    
                    
            </div>
        )
    }
} );


TeamDescriptionComponent.propTypes = {
    team: React.PropTypes.object.isRequired,
    // member: React.PropTypes.object.isRequired,
    // onDescriptionItemClick: React.PropTypes.func.isRequired
};

window.TeamDescriptionComponent = TeamDescriptionComponent;