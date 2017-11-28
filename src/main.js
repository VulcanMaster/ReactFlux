$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');


// --------------------------------------------------------------------------------
// Nice example which shows how to use the strict mode when the script is loading 
// i.e. the most top variables not strictly checked, but this is.
(function (win){
    "use strict"
    console.log("Nice use of strict")
}(window));

// --------------------------------------------------------------------------------
// Attempt three - uses hash routes
var App = React.createClass({
    render: function () {
        var Child;

        switch (this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home; break;
        }

        return (
            <div>
                <Child />
            </div>
        );
    }
});

function render(){
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById("app"));

}

window.addEventListener('hashchange', render);
render();
// --------------------------------------------------------------------------------
// second attempt, when we display the ract component "Home" to div on "index.html"
// React.render(<Home />, document.getElementById('app'));


// --------------------------------------------------------------------------------
// below is the code what was used as example of very beginnung course 
// var App = console.log('Hello world from Browserify !');
// // common js pattern
// module.exports = App;