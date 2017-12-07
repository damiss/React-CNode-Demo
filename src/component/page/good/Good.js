import React, { Component } from 'react';
import axios from 'axios';

class Good extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // store.initData();
        axios.get(`https://cnodejs.org/api/v1/topics?tab=good`)
            .then(res => {
                const data = res.data.data;
                console.log(res)
                this.setState({ "data": data });
            });
        console.log("good componentDidMount")
    }
    clickHandle(data) {
        this.props.history.push('/detail/' + data.id)
    }
    render() {
        const ListTitStyle = {
            display: "inline-block",
            width: "70vw",
            color: "#666"
        }
        const ListTitAva = {
            display: "inline-block",
            height: "30px",
            width: "30px",
            float: "right"
        }
        const ImgSize = {
            width: "100%"
        }
        return (
            <div>
                <ul>
                    {
                        this.state.data.map((data) => {
                            return (
                                <li key={data.id} onClick={this.clickHandle.bind(this, data)}>
                                    <div className="List-title">
                                        <span style={ListTitStyle}>{data.title}</span>
                                        <span className="" style={ListTitAva}><img style={ImgSize} src={data.author.avatar_url} alt="" /></span>
                                    </div>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Good;