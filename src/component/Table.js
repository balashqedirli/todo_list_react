import React, { useState } from 'react';
import './table.css';

export default function Table () {

            let [array,setArray] = useState([])
            let [inputdata,setInputdata] = useState({name:"", number:""}) 
            let [index,setIndex] = useState()
            let [bolin,setBolin] = useState(false)
            let{name,number}=inputdata;


            function data(e) {
                setInputdata({...inputdata,[e.target.name]:e.target.value})

            }

           

            function addinputdata () {
                setArray([...array,{name,number}])
                // console.log(inputdata)
                
            }
            // console.log(array,"total")


            function deletedata(i) {
             
                let total = [...array]
                total.splice(i,1)
                setArray(total)

            }

            function updatedata(i) {
                let {name,number} = array[i]
                setInputdata({name,number})
                setBolin(true)
                setIndex(i)
                
            }
            
            function updateinfo() {
                let total = [...array]
                total.splice(index,1,{name,number})
                setArray(total)
                setBolin(false)
                setInputdata({name:"",number:""})
            }




    return (
        <div className='app'>
            <h1 className='todo'>Todo App</h1>
            <input type='text' className='input' value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
            <input type='number' className='input' value={inputdata.number || ""} name='number' placeholder='Enter Number' onChange={data} />
            <button className='btn' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

                <br />

                

                <table border="1" width="100%">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>

                    {


array && array.map(
    (item,i)=>{
        return (
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td><button onClick={()=>updatedata(i)}>update</button></td>
                <td><button onClick={()=>deletedata(i)}>delete</button></td>
            </tr>
        )
    }
)
                    }


                    </tbody>
                </table>

        </div>

    );
}