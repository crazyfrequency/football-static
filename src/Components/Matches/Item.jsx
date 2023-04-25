import React from 'react'
import { AutoSizer, List } from 'react-virtualized';

export default function Item({key, index, style}, state){
    let data = state.list[index];
    return (
      <div
        key={key}
        className='listItemCom'
        style={style}
      >
        <img src={data.competition?.emblem} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
        <div>{data.competition?.name}</div>
        <div style={{display:"flex"}}>
          <img src={data.area?.flag} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
          <div>{data.area?.name}</div>
        </div>
        <div>{data.season?.startDate}</div>
        <div>{data.season?.endDate}</div>
        <div style={{display:"flex"}}>
          <img src={data.homeTeam?.crest} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
          <div>{data.awayTeam?.name}</div>
        </div>
        <div style={{display:"flex"}}>
          <img src={data.homeTeam?.crest} style={{width:style?.height??"100%", height:style?.height??"auto"}} alt="" />
          <div>{data.awayTeam?.name}</div>
        </div>
      </div>
    )
}
