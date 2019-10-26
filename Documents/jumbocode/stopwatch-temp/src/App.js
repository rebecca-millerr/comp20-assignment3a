import React          from 'react';
import Counter        from './Counter';
import Stopwatch      from './Stopwatch'

import './Heading.css';
import './Counter.css';
import './CenteredElem.css';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = { count: 0 };

        // set up functions to take state change from pitch counter
    }

    render() {
        return (
            <div className = "CenteredElem">
                <Counter count={this.state.count} />
                <Stopwatch/>
            </div>
        );
    }
    
}

export default App;
