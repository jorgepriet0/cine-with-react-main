import React from 'react'
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex mt-96 flex-col items-center bg-black text-center text-white p-4 bottom-0">
      <div className="w-full text-center">
        © 2023 Copyright:&ensp;
        <Link to="/">JeiPrime</Link>
      </div>
    </footer>
   </>
  )
}

export default Footer