import React, { Component } from 'react';
import axios from 'axios'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        console.log(this.props.match.params.id);
          
    }
    componentDidMount() {
        // store.initData();
        axios.get(`https://cnodejs.org/api/v1/topic/${this.props.match.params.id}`)
            .then(res => {
                const data = res.data.data;
                console.log(data)
                this.setState({ data });
                console.log(this.state.data.content)
            });
        console.log("detail componentDidMount")
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: `${this.state.data.content}`}}></div>
            </div>
        )
    }
}

export default Detail;