import React, { useEffect } from 'react';
import Router from 'next/router';
function Myaccount() {
 useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      Router.push('/')
    }
 })
    return (
        <div></div>
    )
}
export default Myaccount;