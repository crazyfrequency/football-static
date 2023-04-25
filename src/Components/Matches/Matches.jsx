import React, { Component } from 'react'
import { AutoSizer, List } from 'react-virtualized';
import Item from './Item';

export default class Matches extends Component {

    constructor(props){
        super(props);

        this.state = {list:null}

        let params = document.location.pathname;
        if(params.endsWith("/")) params=params.substring(0,params.length-1);
        let id = params.substring(params.lastIndexOf("/")+1);
        console.log(id)
        fetch(`https://api.football-data.org/v4/teams/${id}/matches/?limit=500`, {headers:{"X-Auth-Token":process.env.REACT_APP_SECRET_CODE}})
        .then(async val =>{
          console.log(val)
          if(!val.ok)
            return this.setState({list:[]});
          val = await val.json();
          return this.setState({list: val.matches?val.matches:[val]??[]});
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
                  rowHeight={40}
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
