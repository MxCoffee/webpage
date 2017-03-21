import React from 'react'
import css from 'next/css'

export default () => 
<div className={header}>
     <h1 className={style}>Teresa Coffey</h1>
        <h2>Recent Graduate of West Chester University</h2>
		<p>This is an online resumé</p>
</div>


const style = css({
 color: 'red',
 '@media (max-width: 500px)': {
   color: 'blue'
  }
})

const header = css({
  height: '500px',
  background: '#F0F0F0',
  border: '1px solid #CCC',
  width: '960px',
  margin: '20px auto'
})
