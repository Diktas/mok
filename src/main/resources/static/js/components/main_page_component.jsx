var styles = {

};

var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var MainPageComponent = React.createClass( {
    render: function() {

        return (
            <div>
                Hello Main Page !
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home<span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Tables <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><a href="#">Teams</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                                        
                    </div>
                </nav>
                                        
                <div className="content">
                    {this.props.children}
                </div>
                <footer>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="copyright">© 2017 Gsh</div>
                            </div>
                        </div>                    
                </footer>
            </div>

        )
    }
});

window.MainPageComponent = MainPageComponent;