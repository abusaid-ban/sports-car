import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import NewAddedtoys from "./NewAddedtoys";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [newToys, setNewToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setNewToys(data))
    }, [user])
    const handleDelete = id =>{
        const proceed = confirm('Are you sure want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/myToys/${id}`,{
                method:"DELETE"
               
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successful;')
                    const remaining = newToys.filter(newToy => newToy._id !== id);
                    setNewToys(remaining);

                }
            })


        }

    }
    // const handleUpdate = id =>{
    //     fetch(`http://localhost:5000/myToys/${id}`,{
    //         method:"PATCH",
    //         headers:{
    //             "content-type":"application/json"
    //         },
    //         body:JSON.stringify({status:'confirm'})
           
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         if(data.modifiedCount > 0){
    //             alert('Updated Successful');

    //         }

    //     })

    // }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Picture</th>
                            <th>Name</th>
                            <th>Seller name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newToys.map(toys => <NewAddedtoys
                                key={toys._id}
                                toys={toys}
                                handleDelete={handleDelete}
                                // handleUpdate={handleUpdate}
                            ></NewAddedtoys>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;