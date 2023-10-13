import React, { useState } from 'react'
import CreateTable from './CreateTable'

export default function Form() {
    const [count, setCount] = useState(1);
    const [submittedData, setSubmittedData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        count:1,
        name: '',
        password:'',
        email: '',
        languege:'',
        teaxtarea:'',
        date:'',
        selectgender:'',
        file:''
      });
    
    
      
 

    // const [count, setCount] = useState(1);
    // const [inputValue, setInputValue] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const [languege, setLanguege] = useState('');
    // const [teaxtarea, setTeaxtArea] = useState('');
    // const [date, setDate] = useState('');
    // const [selectgender, setSelectgender] = useState('');
   
    // const [file, setFile] = useState('');
    //  const [items, setItems] = useState([]);
    const addData= async  (e)=> {
        //  e.preventDefault();   

   if(editIndex!==null){

    const updatedItems = [...submittedData];
        updatedItems[editIndex] = formData;
        setSubmittedData(updatedItems);
         setEditIndex(null);
        setFormData({count:0,
            name: '',
            password:'',
            email: '',
            languege:'',
            teaxtarea:'',
            date:'',
            selectgender:'' ,
            file:''}); // Clear the form
   }else{

        setCount((count)=>count+1)
        const newSubmittedData = [...submittedData, { srno: count, ...formData }];
        
        setSubmittedData(newSubmittedData);
        setFormData({count:0,
        name: '',
        password:'',
        email: '',
        languege:'',
        teaxtarea:'',
        date:'',
        selectgender:'' ,
        file:''}); // Clear the form
   }

        // console.log("add data called")
        // setCount((count)=> count+1)
        // console.log(count)
        // setItems([...items,count, inputValue,password,email,languege,teaxtarea,date,selectgender,file]);
        // setInputValue('')
        // setPassword('')
        // setEmail('')
        // setLanguege('')
        // setTeaxtArea('')
        // setDate('')
        // setSelectgender('')
        // setFile('')
       
    }

    function handleEdit(index) {
        // Set the input field to the item being edited
        setFormData(submittedData[index]);
        setEditIndex(index);
      }

    // const handleChange = (e) => {
    //     const { name, value } = e.target.value;
    //     setFormData({ ...formData, [name]: value });
    //   };

    const editUser = (index) => {
        // Implement edit functionality here
      
        const updatedItems = [...submittedData];
        updatedItems[editIndex] = formData;
        setSubmittedData(updatedItems);
        setEditIndex(null);
        setFormData({count:0,
            name: '',
            password:'',
            email: '',
            languege:'',
            teaxtarea:'',
            date:'',
            selectgender:'' ,
            file:''}); // Clear the form
            
      };
    
      const deleteUser = (index) => {
        const updatedUserData = submittedData.filter((_, i) => i !== index);
        setSubmittedData(updatedUserData);
      };

    return (
        <>
            <div style={{ height: "100vh", width: "100vw" }}>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-xs-3 col-sm-3 col-lg-3 col-md-3" style={{ border: "1px solid black", marginLeft: "41px", marginTop: "150px", height: "622px",maxWidth: "400px" }}>

                            <form >

                                <div className="form-group" style={{ marginTop: "20px", marginBottom: "20px" }}>

                                    <input type="text" name='name'  className="form-control" id="exampleInputUserName" placeholder="UserName" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>

                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}  required />
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>

                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                    <small id="emailHelp" className="my-4" style={{ textAlign:"left"}}>We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>

                                    <select className="form-select" aria-label="Default select example" value={formData.languege} onChange={(e) => setFormData({ ...formData, languege: e.target.value })}>
                                        <option >Open this select menu</option>
                                        <option >Java</option>
                                        <option >Python</option>
                                        <option >.Net</option>
                                        <option >JavaScript</option>
                                        <option >HTML</option>
                                    </select>
                                </div>

                                <div className="form-group" style={{ marginBottom: "20px" }}>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='textarea' value={formData.teaxtarea} onChange={(e) => 
                                        
                                        
                                        setFormData({ ...formData, teaxtarea: e.target.value })}></textarea>
                                </div>

                                <div style={{textAlign:"left"}}>
                                    <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}  style={{ marginLeft: "-249px" }} />
                                </div>

                                <div style={{ marginBottom: "20px" ,textAlign:"left"}}>

                                    <input type="radio" id="defaultRadio" name="example2" value="Male" onChange={(e) => setFormData({ ...formData, selectgender: e.target.value })}  />
                                    <label for="defaultRadio" style={{ marginRight: "10px" }} > Male </label>

                                    <input type="radio" id="defaultRadio" name="example2" value="Female" onChange={(e) => setFormData({ ...formData, selectgender: e.target.value })}/>
                                    <label for="defaultRadio" style={{ marginRight: "10px" }}> Female </label>

                                    <input type="radio" id="defaultRadio" name="example2" value="Transgender" onChange={(e) => setFormData({ ...formData, selectgender: e.target.value })} />
                                    <label for="defaultRadio" style={{ marginRight: "10px" }}> Transgender </label>

                                </div>
                                <div className="form-group" style={{ marginBottom: "20px" ,textAlign:"left"}}>

                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" value={formData.file} onChange={(e) => setFormData({ ...formData, file: e.target.value })} />
                                </div>

                                <div className="form-check" style={{ marginBottom: "20px",textAlign:"left"}}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1" style={{textAlign:"left" }}>Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button>
                            </form>
                        </div>


                        <div className="col-xs-6 col-sm-6 col-lg-6  col-md-6">
                        
                            <CreateTable userData={submittedData} editUser={handleEdit} deleteUser={deleteUser} count={count}/>            
                             
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
