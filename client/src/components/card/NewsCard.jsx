import React from 'react'

function NewsCard(props) {
  return (
    <>
        <div className="newscard">

            <div className="newscardholder">
                <h1>{props.description}</h1>
            </div>
        </div>
    
    </>
  )
}

export default NewsCard