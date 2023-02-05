import React, { useState } from 'react'

const Upload = () => {

    const [postPhotos, setPostPhotos] = useState([])

    const handlePostPhoto = (e) => {

        const allImages = Array.from(e.target.files)
        
        setPostPhotos((prev) => ([...prev, ...allImages]))
    }

    const handleDelate = (datas) =>{
            const updateImages = postPhotos.filter(data=> data !== datas)

            setPostPhotos([...updateImages])

    }

    console.log(postPhotos)
  return (
    <>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                   <div className="card">
                    <div className="card-body">
                          <div className="input-wrapper py-5">
                            <label htmlFor="">  <input type="file" name="" id="" multiple  onChange={handlePostPhoto}/></label>
                          </div>
                          <div className="preview d-flex">
                            {
                                postPhotos.map((data, index)=>{

                                    const ojjectUrl = URL.createObjectURL(data)


                                    return   <div className="preview-item" >
                                   <div className="card">
                                    <div className="card-body">
                                    <img style={{width:'200px', height:'300px', objectFit:'cover'}} src={ojjectUrl} alt="" />
                                                                        </div>
                                   </div>
                                   <div className="card-footer">
                                   <div className="btn btn-danger btn-class" onClick={()=> handleDelate(data)}>Delete</div>
                                   </div>
                                </div>
                                })
                            }
                          
                          </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Upload