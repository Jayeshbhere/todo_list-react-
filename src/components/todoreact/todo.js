import React,{useState} from 'react'
import "./style.css"

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])

    const addItem = () => {
        if(!inputData){
            alert("please fill the data")
        }
    }
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.png" alt="todologo" />
                    <figcaption>Add Your List Here </figcaption>
                </figure>
                <div className="addItems">
                    <input type="text"
                    placeholder='Add Item'
                    className='form-control' 
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>

                {/* show our items */}
                <div className="showItems">
                    <div className="eachItem">
                        <h3>apple</h3>
                        <div className="todo-btn">
                            <i className="far fa-edit add-btn"></i>
                            <i className="far fa-trash-alt add-btn"></i>
                        </div>
                    </div>
                </div>

                {/* remove all button */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                        <span>CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo