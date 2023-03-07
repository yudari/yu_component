import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Button from './Button'
import ButtonDummy from './ButtonDummy'

export default function DefaultLayout() {

  const navigation = [
    { name: "Colors", to: "/" },
    { name: "Typography", to: "/typography" },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className='h-full bg-slate-400 flex flex-row font-poppins'>
      <div className='w-1/5 bg-gray-main h-screen flex flex-col pl-12 pt-10 sticky left-0 top-0 bottom-0 '>
        <div className="header-banner">
          <h4 className='text-active'>Yu.<span className='text-secondary'>component</span> </h4>
        </div>
        <div className="nav-side flex flex-col gap-6  mt-28">
          {navigation.map((item) => {
            return <NavLink key={item.name} to={item.to} className={({ isActive }) => classNames(isActive ? 'text-active' : 'text-non-active')}>{item.name}</NavLink>
          })}
        </div>
      </div>
      <Outlet />
    </div>
  )
}
