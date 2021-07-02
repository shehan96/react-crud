import React from 'react';

class Rest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    async componentDidMount() {
        //const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //const data = await response.json();
        //console.log(data);
        //this.setState({ totalReactPackages: data.userId })

        console.log(1)

        setTimeout(() => console.log(2), 3000)

        await new Promise((res) => setTimeout(() => res(console.log(3)), 2000))

        setTimeout(() => console.log(4), 0)

        await new Promise((res) => setTimeout(() => res(console.log(5)), 7000))

        setTimeout(() => console.log(6), 500)

        console.log(7);
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