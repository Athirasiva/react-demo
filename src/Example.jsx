import React from 'react'

function Example() {
    const languages = ["HTML","CSS","JS","React","Angular"]
  return (
    <div>
       {/* <ul>
            {
                languages.map((lang,index)=>(
                    <li key={index}>
                        {lang}
                    </li>
                ))
            }
       </ul> */}
       <ul>
        {
            languages.map((lang,index)=>(
                <li key={index}>{lang}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default Example