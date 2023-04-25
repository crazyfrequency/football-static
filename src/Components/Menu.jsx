import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='top-menu'>
        <NavLink to='/' className={({isActive}) => (isActive?"active":"")}>Лиги/Соревнования</NavLink>
        <NavLink to='/teams' className={({isActive}) => (isActive?"active":"")}>Команды</NavLink>
    </div>
  )
}
