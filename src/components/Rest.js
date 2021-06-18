import React from 'react';

class Rest extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        this.setState({ totalReactPackages: data.userId })
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div>
                <h5>GET Request with Async/Await</h5>
                <div>
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export default Rest; 