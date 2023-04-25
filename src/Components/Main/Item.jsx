import React from 'react'
import { AutoSizer, List } from 'react-virtualized';

export default function Item({key, index, style}, state){
    let data = state.list[index];
    const handleClick = () => {
        window.open("/competition/"+data.id,"_self");
    }
    return (
      <div
        key={key}
        className='listItem'
        style={style}
        onClick={handleClick}
      >
        <img src={data?.emblem} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
        <div>{data.name}</div>
        <div>{data.id}</div>
        <div style={{display:"flex"}}>
          <img src={data.area?.flag} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
          <div>{data.area?.name}</div>
        </div>
        <div>{data.currentSeason?.startDate}</div>
        <div>{data.currentSeason?.endDate}</div>
      </div>
    )
}
