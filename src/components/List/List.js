/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'

/* const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
]; */
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class List extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    /* componentDidMount(props) {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            console.log(this.props)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    } */

    //If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.store !== this.props.dataSource) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.store),
            });
        }
    }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
    clickHandle(data) {
        this.props.history.push('/detail/' + data.id)
    }
    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let data = this.props.store;
        // let index = data.length - 1;
        let index = 0;
        const row = (rowData, sectionID, rowID) => {
            if (index > data.length - 1) {
                // index = data.length - 1;
                index = 0;
            }
            const obj = data[index++];
            console.log(obj.title)
            return (
                    <div key={rowID} style={{ padding: '0 15px' }} onClick={() => console.log(123)}>
                        <Link to={`/detail/${obj.id}`}>
                            <div
                                style={{
                                    lineHeight: '50px',
                                    color: '#888',
                                    fontSize: 18,
                                    borderBottom: '1px solid #F6F6F6',
                                }}
                            >{obj.title}</div>
                            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                <img style={{ height: '64px', marginRight: '15px' }} src={obj.author.avatar_url} alt="" />
                                <div style={{ lineHeight: 1 }}>
                                    <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.last_reply_at}</div>
                                </div>
                                
                            </div>
                            <div>
                                <span>{obj.reply_count}/{obj.visit_count}</span>
                                <span onClick={()=>{alert(123)}}>收藏</span>
                            </div>
                        </Link>
                    </div>
            );
        };
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default List;