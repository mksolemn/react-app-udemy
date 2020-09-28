import React, {Component} from "react";
import tachyons from "tachyons";
import {connect} from "react-redux";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import {setSearchField} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    };
};

export class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}));
    }

    render() {
        const {robots} = this.state; // using deconstruct to assign values
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log('render');
        return !robots.length === 0
            ? <h1>Loading</h1>
            : (
                <div>
                    <SearchBar searchVal={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // subscribe to any state changes in redux store
