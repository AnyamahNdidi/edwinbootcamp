import React, { useState } from 'react'
import { app } from "../base"
import { v4 as uuidv4 } from "uuid"
import Editpage from './Editpage'
import EditingComp from './EditingComp'

const db = app.firestore().collection("student")


function Datafile() {
  const [name, setName] = useState("")
  const [position, setposition] = useState("")
  const [fileUpload, setfileUplaof] = useState(null)
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)

  const imageUpload = async (e) => {
    const file = e.target.files[0];
    const storeRef = app.storage().ref();
    const fileRef = storeRef.child(file.name);
    await fileRef.put(file);
    setfileUplaof(await fileRef.getDownloadURL());
  };

  const uploadData = async () => {
    await db.doc().set({
      data: Date.now(),
      name,
      position,
      avatar: await fileUpload,
      id: uuidv4(),
    });
  };

  const onDelete = async (id) => {
    if (window.confirm("Are you sure you want to do this?")) {
      await db.doc(id).delete();
    }

  }
  const clickEffect = () => {
    setShow((prev) => (!prev))
  }


  const editData = async (id) => {
    // const editNa

    // await db.doc(id).update({
    //   name: editName

    // })
    console.log(id)
  }



  const getData = async () => {
    await db.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
      })
      setData(items);

    })
  }
  // console.log(data)
  React.useEffect(() => {
    getData()
  }, [])




  return (
    <div>

      <center style={{}}>

        <section style={{ width: "300px", display: "flex", flexDirection: "column" }} >
          <input type="file" onChange={imageUpload} />

          <aside>
            <input
              placeholder="name"
              value={name}
              onChange={
                (e) => {
                  setName(e.target.value)
                }
              }
            />
            <input placeholder="position"
              value={position}
              onChange={
                (e) => {
                  setposition(e.target.value)
                }
              }

            />

          </aside>
          <button onClick={uploadData}>submit</button>
        </section>

      </center>
      <section>
        {
          data.map(({ name, avatar, id, position }) => (

            <aside key={id}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                  <div>{name}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      onDelete(id);
                      // console.log(id)
                    }}
                  >
                    ❌
                </div>


                </div>

                <img src={avatar}
                  alt={name}
                  style={{
                    display: "flex", justifyContent: "space-between"
                  }}
                />
                <div>{position}</div>

                <div>
                  <div style={{ cursor: "pointer" }}

                    onClick={
                      () => {
                        clickEffect()
                        console.log(id)
                      }
                    }

                  >
                    click to edit🧾
                    <EditingComp show={show} setShow={setShow} data={data} setData={setData} />
                  </div>


                </div>

              </div>

            </aside>
          ))
        }

      </section>

    </div>
  )
}

export default Datafile


{/* <Editpage   show={show} setShow={setShow}  data={data} setData={setData}/> */ }