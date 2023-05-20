import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AddToy = () => {
   
    const {user} = useContext(AuthContext);
    const handleAddToys = (event)=>{
        event.preventDefault();
       const form = event.target;
       const photo = form.photo.value;
       const name = form.name.value;
       const seller_name = form.seller_name.value;
       const email = user?.email;
       const sub_category = form.sub_category.value;
       const price = form.price.value;
       const rating = form.rating.value;
       const quantity = form.quantity.value;
       const details = form.details.value;
       const NewToys = {photo,name,seller_name,email,sub_category,price,rating,quantity,details}
       console.log(NewToys);

       fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(NewToys)

       })
       .then(res => res.json())
       .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert('New Toys Added Successfully')
        }
       })

    }
    return (
        <div className="bg-slate-400 ">
            <h2 className="text-center text-3xl py-5 font-bold ">Add A Toys</h2>

            <form onSubmit={handleAddToys} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller_name" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" placeholder=" Seller email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name="sub_category" placeholder="sub-category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price </span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="details" className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control mt-5 pb-2 w-1/2 mx-auto">
                    <input className="btn btn-primary" type="submit" value="Add Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;