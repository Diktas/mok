
var ExampleLineComponent = function( props ) {

    var styles = {
        lineColor: { backgroundColor: "white" },
    };

    var Link = ReactRouter.Link;

    var addForRemoval = function() {
        props.addForRemoval( props.id )
    };

    var removeFromArray = function() {
        props.removeFromArray( props.id )
    };

    var handleOnClick = function() {
        if ( props.marked ) {
            props.changeColor();
            removeFromArray();
        } else {
            addForRemoval();
            props.changeColor();
        }
    };

    return (
        <tr style={props.backgroundColor}>

            <td style={{ width: '40px' }}>
                <button type="button" className="btn btn-default" onClick={handleOnClick}
                    data-toggle="tooltip" data-placement="top" title="Select member">
                    <span className="glyphicon glyphicon-flag"></span></button>
            </td>

            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.date}</td>
            <td>{props.address}</td>

            <td style={{ width: '40px' }}>
                <Link to={'/members/update/' + props.id}><span className="glyphicon glyphicon-pencil"
                    data-toggle="tooltip" data-placement="top" title="Edit member"></span></Link>
            </td>
            <td style={{ width: '40px' }}>
                <Link to={'/members/description/' + props.id}><span className="glyphicon glyphicon-info-sign"
                    data-toggle="tooltip" data-placement="top" title="Description"></span></Link>
            </td>
        </tr>
    )
};

window.ExampleLineComponent = ExampleLineComponent;