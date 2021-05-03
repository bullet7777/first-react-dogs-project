import React, { Component } from 'react'
import NewButton from './NewButton'

class Dogs extends Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/dogs')
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            this.setState({
                dogs:data
            })
        })
    }


    render() {
        const dogs = this.state.dogs.map( d=> <li>{d.title}</li>)

        return (
            <div>
                <h3>My Dogs</h3>
                <hr/>
               {dogs}
               <br/>
               <br/>
            <NewButton />
            </div>
        )
    }
}

export default Dogs
