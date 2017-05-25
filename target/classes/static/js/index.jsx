var App = React.createClass( {
    render: function() {
        return (
            <div style={{ paddingTop: '20px' }}>
                {this.props.children}
            </div>
        );
    }
} );

var NoMatch = React.createClass( {
    render: function() {
        return <div>Route did not match</div>;
    }
} );

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render((
    <Router history={hashHistory}>
        <Router>
            <Route path="/" component={MainPageComponent}>
                <IndexRoute component={HelloWorldComponent} />
                <Route path="/hello-world" component={HelloWorldComponent} />
                <Route path="/projects" component={ProjectsContainer} />
                <Route path="/projects/create" component={AddProjectContainer} />
                <Route path="/projects/update/:projectId" component={EditProjectContainer} />
                <Route path="/projects/description/:projectId" component={ProjectDescriptionContainer} />
                <Route path="/teams" component={TeamsContainer} />
                <Route path="/teams/create" component={AddTeamContainer} />
                <Route path="/teams/update/:teamId" component={EditTeamContainer} />
                <Route path="/teams/description/:teamId" component={TeamDescriptionContainer} />
                <Route path="/members" component={MembersContainer} />
                <Route path="/members/create" component={AddMemberContainer} />
                <Route path="/members/update/:memberId" component={EditMemberContainer} />
                <Route path="/members/description/:memberId" component={MemberDescriptionContainer} />
                <Route path="/positions" component={PositionsContainer} />
                <Route path="/positions/create" component={AddPositionContainer} />
                <Route path="/positions/update/:positionId" component={EditPositionContainer} />
            </Route>
        </Router>
    </Router>
), document.getElementById( 'root' ) );