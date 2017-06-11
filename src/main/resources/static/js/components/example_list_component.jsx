

var ExampleListComponent = function( props ) {
    
    var Link = ReactRouter.Link;

    var members = props.members.map( function( member, index ) {

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
            <ExampleLineContainer
                key={index}
                id={member.id}
                name={member.name}
                surname={member.surname}
                date={fullDate}
                address={member.address}
                addForRemoval={props.addForRemoval}
                removeFromArray={props.removeFromArray}
                />
        );
    });
    return (
        <div>
            <button className="btn btn-success" ><Link to='/members/create/'>
            <span style={{ color: 'black' }}>Add New Member</span></Link></button>
            
            <div className="panel panel-default">
                <div className="panel-heading">Members</div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Date Of Birth</th>
                            <th>Address</th>
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
    );

};


window.ExampleListComponent = ExampleListComponent;