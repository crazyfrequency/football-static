import React from 'react'
import { AutoSizer, List } from 'react-virtualized';

export default function Item({key, index, style}, state){
    let data = state.list[index];
    const handleClick = () => {
        window.open("/teams/"+data.id,"_self");
    }
    return (
      <div
        key={key}
        className='listItemTeam no-cursor'
        style={style}
        onClick={handleClick}
      >
        <img src={data?.crest} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
        <div>{data.name}</div>
        <div>{data.address}</div>
        <a href={data?.website}>{data?.website}</a>
        <div>{data.founded}</div>
      </div>
    )
}
