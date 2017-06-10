
var ExampleLineComponent = function( props ) {

    var styles = {
        lineColor: { backgroundColor: "white" },

    };

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
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.date}</td>
            <td>{props.address}</td>

            <td style={{ width: '40px' }}>
            <button type="button" className="btn btn-default" onClick={handleOnClick}
                data-toggle="tooltip" data-placement="top" title="Select member">
                <span className="glyphicon glyphicon-flag"></span></button>
        </td>
        </tr>
    )
};

window.ExampleLineComponent = ExampleLineComponent;