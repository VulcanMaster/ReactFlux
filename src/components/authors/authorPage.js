"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({

    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = Authors;

// "use strict";

// var React = require('react');
// var Router = require('react-router');
// var Link = require('react-router').Link;
// var AuthorStore = require('../../stores/authorStore');
// var AuthorActions = require('../../actions/authorActions');
// var AuthorList = require('./authorList');

// var AuthorPage = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			authors: AuthorStore.getAllAuthors()
// 		};
// 	},

// 	componentWillMount: function() {
// 		AuthorStore.addChangeListener(this._onChange);
// 	},

// 	//Clean up when this component is unmounted
// 	componentWillUnmount: function() {
// 		AuthorStore.removeChangeListener(this._onChange);
// 	},

// 	_onChange: function() {
// 		this.setState({ authors: AuthorStore.getAllAuthors() });
// 	},

// 	render: function() {
// 		return (
// 			<div>
// 				<h1>Authors</h1>
// 				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
// 				<AuthorList authors={this.state.authors} />
// 			</div>
// 		);
// 	}
// });

// module.exports = AuthorPage;