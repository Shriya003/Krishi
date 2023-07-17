import React from 'react'
require('../../style/error.css')
function Error() {
  return (
    <>
    <div className="error_ext_div">
        <div className="error_main_div">

        <h1>Oops!</h1>
        <h2>404-PAGE NOT FOUND</h2>
        <h3>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavaibale.</h3>

        <button className='go_home'>GO TO HOMEPAGE</button>
        </div>
    </div>
    </>
  )
}

export default Error