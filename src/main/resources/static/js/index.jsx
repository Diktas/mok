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
        <Route path="/" component={App}>
            <IndexRoute component={HelloWorldComponent} />
            <Route path="/hello-world" component={HelloWorldComponent} />
        </Route>
    </Router>
), document.getElementById( 'root' ) );