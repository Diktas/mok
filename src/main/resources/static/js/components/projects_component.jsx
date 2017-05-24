var ProjectsComponent = React.createClass( {
    render: function() {
        var self = this;
        var projects = this.props.projects.map( function( project, index ) {

            // dead line date
            var d = new Date( project.dead_line );
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            // jei menuo vienzenklis sk tai prieki bus 0 pvz: 03
            if ( month < 10 ) {
                month = '0' + month;
            }
            if ( date < 10 ) {
                date = '0' + date;
            }
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr key={index}>
                    <td>{project.id}</td>
                    <td>{project.team_id}</td>
                    <td>{project.project_title}</td>
                    <td>{project.budget}</td>
                    <td>{project.description}</td>
                    <td>{fullDate}</td>
                    <td>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( project )}>
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                </tr>
            );
        });
        return (
            <div className="container">
                <button className="btn btn-success" onClick={this.props.onAddClick}  >Mygtukas iterpti nauja knyga</button>
                <div className="panel panel-default">

                    <div className="panel-heading">Projects</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TEAM ID</th>
                                <th>PROJECT_TITLE</th>
                                <th>BUDGET</th>
                                <th>DESCRIPTION</th>
                                <th>DEAD LINE</th>
                                <th>EDIT</th>

                            </tr>
                        </thead>
                        <tbody>
                            {projects}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

ProjectsComponent.propTypes = {
    projects: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired
};

window.ProjectsComponent = ProjectsComponent;