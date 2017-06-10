
var array = [];

var ExampleListContainer = React.createClass({
    getInitialState: function() {
        return { members: [] };
    },

    componentWillMount: function() {
        var self = this;
        axios.get('/api/team/members')
            .then(function (response) {
                self.setState({ members: response.data });
                console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
    },

    addForRemoval: function (id) {
        if (array.includes(id)){
            console.log("id already added to array")
        } else {
            console.log("added new id to array: " + id);
            array.push(id);
        }
        console.log(array);
    },

    removeFromArray: function (id) {
        var index = array.indexOf(id);
        console.log(index);
        array.splice(index, 1);
    },

    removeMarkedLines: function () {
        var self = this;
        array.map(function (id, index) {
            var URL = '/api/team/members/' + id;
            axios.delete(URL)
                .then(function (response) {
                    console.log("deleted example line with id " + id );
                    console.log(response.data);
                    axios.get('/api/team/members/')
                        .then(function (response) {
                            self.setState({ members: response.data });
                            console.log(response.data);
                        })
                        .catch(function (error){
                            console.log(error);
                        })
                })
                .catch(function (error) {
                    console.log(error);
                })
        });
        array = [];
    },

    render: function() {
        return (
            <div>
                <ExampleListComponent
                    members={this.state.members}
                    addForRemoval={this.addForRemoval}
                    removeFromArray={this.removeFromArray}
                />
                <button onClick={this.removeMarkedLines} className="btn btn-danger" style={{ float: 'right' }} >Delete marked lines</button>
            </div>
        )
    }
});

window.ExampleListContainer = ExampleListContainer;