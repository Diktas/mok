
var ProjectDescriptionComponent = React.createClass( {
    render: function() {

        var d = new Date( this.props.project.dead_line );
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        if ( month < 10 ) month = '0' + month;
        if ( date < 10 ) date = '0' + date;
        var fullDate = year + '-' + month + '-' + date;

        return (
            <div id="description" className="form-border">
                <h2 className="description-title">Project:<span style={{ color: 'black' }}>&nbsp;{this.props.project.project_title}</span></h2>
                <hr />

                <span className="description-title">Title:  </span><span>{this.props.project.project_title}</span><br />
                <span className="description-title">Dead line: </span><span>{fullDate}</span><br />                
                <span className="description-title">Budget </span><span>{this.props.project.budget}</span><br />
                <span className="description-title">Team ID: </span><span>{this.props.project.team_id}</span><br />
                <hr />
                <span className="description-title">About Project: </span><span>{this.props.project.description}</span><br /><br />
                <button id="ProjectDescriptionCancel" className="btn btn-success" style={{ marginRight: '20px' }}
                    onClick={this.props.onCancelClick}>Back
                </button>
            </div>
        )
    }
} );


ProjectDescriptionComponent.propTypes = {
    project: React.PropTypes.object.isRequired
};

window.ProjectDescriptionComponent = ProjectDescriptionComponent;