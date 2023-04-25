import React, { Component } from 'react'
import { AutoSizer, List } from 'react-virtualized';
import Item from './Item';

export default class Teams extends Component {
    constructor(props){
        super(props);
        this.state = {
          list: null
        }
        fetch(`https://api.football-data.org/v4/teams?limit=500`, {headers:{"X-Auth-Token":process.env.REACT_APP_SECRET_CODE}})
        .then(async val =>{
          if(!val.ok)
            return this.setState({list:[]});
          val = await val.json();
          return this.setState({list: val.teams?val.teams:[val]??[]});
        })
      }
    
      render() {
        if(this.state.list)
        return (
          <div style={{height:"100%", margin: "1rem"}}>
            <AutoSizer>
              {({height, width}) => (
                <List
                  height={height}
                  width={width}
                  rowCount={this.state.list.length}
                  rowHeight={50}
                  rowRenderer={(data)=>Item(data, this.state)}
                />
              )}
            </AutoSizer>
          </div>
        )
        else return (
          <div style={{height:"100%"}}>
            Loading
          </div>
        )
      }
}
