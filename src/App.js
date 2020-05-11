import React,{Component} from "react";
import {robots} from "./robots";
import CardList from "./CardList";
import SearchBar from "./SearchBox";

export class App extends Component{
    constructor() {
        super();
        this.state = {
            robots,
            searchField: ''
        }
    }

    onSearch = (event) => {
        console.log(event);
        this.setState({searchField: event.target.value})
    }

render() {
    const filteredRobots = this.state.robots.filter( robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
        <div>
            <SearchBar searchVal={this.onSearch}/>
            <CardList robots={filteredRobots}/>
        </div>
    )
}
}
export default App;
