var PositionsContainer = React.createClass( {
    getInitialState: function() {
        return {
            positions: []
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get( '/api/position/' )
            .then( function( response ) {
                self.setState( {
                    positions: response.data
                } );
            } );

    },


    // Add new position 
    handleAddPosition() {
        this.context.router.push( '/positions/create/' );
    },

    // Edit position
    handleEditPosition: function( position ) {
        var self = this;
        return function() {
            self.context.router.push( '/positions/update/' + position.id );
        }
    },

    // Delete position
    handleRemovePosition: function( position ) {
        var self = this;
        return function() {
            axios.delete( '/api/position/' + position.id ).then( function( response ) {
                self.componentWillMount();
            } );
        };
    },    

    render: function() {
        return <PositionsComponent positions={this.state.positions} onAddClick={this.handleAddPosition} onEditItem={this.handleEditPosition}
            onRemoveItem={this.handleRemovePosition} />
    }
} );

PositionsContainer.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

window.PositionsContainer = PositionsContainer;