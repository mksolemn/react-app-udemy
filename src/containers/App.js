import React, {Component} from "react";
import tachyons from "tachyons";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        console.log(event);
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField} = this.state; // using deconstruct to assign values
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log('render');
        return !robots.length === 0
            ? <h1>Loading</h1>
            : (
                <div>
                    <SearchBar searchVal={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
    }
}

export default App;
