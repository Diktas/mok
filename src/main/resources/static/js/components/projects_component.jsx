
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
            if ( month < 10 ) 
                month = '0' + month;
            
            if ( date < 10 ) 
                date = '0' + date;
            
            var fullDate = year + '-' + month + '-' + date;

            return (
                <tr key={index} >
                    <td>{project.id}</td>
                    <td>{project.project_title}</td>
                    <td>{project.budget}</td>
                    <td>{fullDate}</td>
                    <td style={{ width: '40px' }}>
                        <button type="button" className="btn btn-default" onClick={self.props.onEditItem( project )}
                            data-toggle="tooltip" data-placement="top" title="Edit project">
                            <span className="glyphicon glyphicon-pencil"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id="ProjectDelete" type="button" className="btn btn-default" onClick={self.props.onRemoveItem( project )}
                            data-toggle="tooltip" data-placement="top" title="Delete project">
                            <span className="glyphicon glyphicon-remove"></span></button>
                    </td>
                    <td style={{ width: '40px' }}>
                        <button id={"ProjectDescription" + project.id} type="button" className="btn btn-default"
                            onClick={self.props.onDescriptionItemClick( project )}
                            data-toggle="tooltip" data-placement="top" title="Project Description">
                            <span className="glyphicon glyphicon-info-sign"></span></button>
                    </td>
                </tr>
            );
        } );
        return (
            <div>
                <button className="btn btn-success" onClick={this.props.onAddClick}  >Create new Project</button>
                <div className="panel panel-default">

                    <div className="panel-heading">Projects</div>
                    <table className="table table-hover" >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>BUDGET</th>
                                <th>DEAD LINE</th>
                                <th></th>
                                <th></th>
                                <th></th>
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
} );

ProjectsComponent.propTypes = {
    projects: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired
};

window.ProjectsComponent = ProjectsComponent;