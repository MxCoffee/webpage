import React from 'react'
import css from 'next/css'

export default () => 
<div className={header}>
	<h1 className={style}>Teresa Coffey</h1>
        	<h2>Recent Graduate of West Chester University</h2>
		<p>This is an online resumé</p>
</div>
<div className={body}>
	<h1>Welcome!</h1>
	<p>I created this page to exibit my abilities as a 
			   web page developer. I created this page using 
			   Zeit. Zeit is an open source </p>
</div>

const style = css({
 color: 'black',
 '@media (max-width: 500px)': {
   color: 'blue'
  }
})

const header = css({
  height: '200px',
  background: '#F0F0F0',
  border: '1px solid #CCC',
  width: '100%',
  margin: '20px auto'
})
