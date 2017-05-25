var App = React.createClass( {
    render: function() {
        return (
            <div style={{ paddingTop: '20px' }}>
                {this.props.children}
            </div>
        );
    }
});

var NoMatch = React.createClass( {
    render: function() {
        return <div>Route did not match</div>;
    }
});

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
            </Route>
            
        </Router>
    </Router>
), document.getElementById( 'root' ) );