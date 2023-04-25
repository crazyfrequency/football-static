import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import './Main.css';
import Item from './Item';
export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: null
    }
    let params = new URLSearchParams(document.location.search);
    let search = params.get("search");
    console.log(process.env)
    fetch(`https://api.football-data.org/v4/competitions/${search?search:""}`, {headers:{"X-Auth-Token":process.env.REACT_APP_SECRET_CODE}})
    .then(async val =>{
      if(!val.ok)
        return this.setState({list:[]});
      val = await val.json();
      return this.setState({list: val.competitions?val.competitions:[val]??[]});
    })
  }

  render() {
    if(this.state.list)
    return (
      <div style={{height:"100%", margin: "1rem"}}>
        <div className='main-search'>
          <input id='search' type="text" />
          <button onClick={e=>{
            e.preventDefault();
            let search = document.getElementById('search').value;
            fetch(`https://api.football-data.org/v4/competitions/${search}`, {headers:{"X-Auth-Token":"d3ea66c1d0a347c0b5ee22769d1689e1"}})
            .then(async val =>{
              if(!val.ok)
                return this.setState({list:[]});
              val = await val.json();
              return this.setState({list: val.competitions?val.competitions:[val]??[]});
            })
            let params = new URLSearchParams(document.location.search);
            params.set("search", search);
            window.history.pushState(null, '', "/?"+params.toString());
          }}>search</button>
        </div>
        <AutoSizer>
          {({height, width}) => (
            <List
              height={height}
              width={width}
              rowCount={this.state.list.length}
              rowHeight={20}
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
