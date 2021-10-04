import React,{ useState} from "react"
import Modal from './Modal'
import {Bell, calender} from './react-bootstrap-icons'

function AddNewTodo (){
const [showModal, setShowModal] = useState(false)
const[text, setText] = useState("")
    return (
        
        <div className = 'AddNewTodo '>
            <div className="btn">
            <button onClick={()=> setShowModal(true)}> 
                 + NewTodo 
            </button>

            </div>
            
             <Modal showModal={showModal} setShowModal={setShowModal}>
               <form>
                   <div className="text">
                       <h3>Add New To Do</h3>
                       <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder ="To Do"
                        autoFocus
                       />

                   </div>
                   <div className="remind">
                       <Bell/>
                       <p>Remind Me</p>
                   </div>
                   <div className= "pick day"></div>
                   <div className="title">
                       <calender/>
                       <p></p>
                   </div>
               </form>

            </Modal>
        </div>

    )


}

export default AddNewTodo 