import React, { useState } from 'react'

const Checkbox = () => {


    
    const [cat, setCat] = useState(["men", "women", 'tshirt', 'electrononics'])


    const [selected, setSelected] = useState([])


    // Handfle Checkboc update
    const handleCheckbox = (e) => {
        
        let oldArray = [...selected]

        let item = e.target.value
        
        if(oldArray.includes(item)){
            oldArray.splice(oldArray.indexOf(item), 1)
        }else{
            oldArray.push(item)
        }

        setSelected(oldArray)

    }
  return (
    
    <>
            <div className="container py-5">
                <div className="row ">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h4>Check Box Issue</h4>
                                <ul >
                                    {
                                        cat && cat.map( (item , index)=>{

                                            console.log(item)
                                            return <li style={{listStyle:'none'}} value={item} key={index} >
                                            <input type="checkbox" name="" id="" value={item} checked={selected.includes(item)} onChange={handleCheckbox}/>
                                            &nbsp;
                                           {item}
                                          </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Checkbox;
