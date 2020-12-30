import React from 'react'

function EditingComp({ show, setShow, data, setData }) {

  return (
    <div>
      {
        show ? <div>
          <div>

            <input placeholder="name" />
          </div>
          <button onClick={() => {
            console.log(data.id)
          }}>
            Check
             </button>
        </div> : null
      }
    </div>
  )
}

export default EditingComp
