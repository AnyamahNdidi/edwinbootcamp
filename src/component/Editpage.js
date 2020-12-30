import React, { useState } from 'react'
import "./Editstyle.css"
import { app } from "../base"
import { v4 as uuidv4 } from "uuid"



const db = app.firestore().collection("student")

function Editpage({ show, setShow }) {

  const editData = async (id) => {

  }
  return (
    <div>
      <>
        {
          show ?
            <div className="container3">

              <div className="container3_wrapper">

                <section>


                </section>


              </div>

            </div> : null
        }
      </>

    </div>
  )
}

export default Editpage
