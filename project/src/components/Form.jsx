import React, {useState } from 'react'

function Form() {
    const [formData, setFormData] = useState("");
    const onChangeHandler = (e) => {
        setFormData({
           title: formData
        });
    }
   const btn = () => {
      fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })  
        console.log(formData);
    }
  return (
    <div>
           <input
                type="text"
                name = "Name"  
                value={formData.Name}
                onChange ={onChangeHandler}
          />
          <button onClick={btn}>Submit</button>
    </div>
  )
}

export default Form