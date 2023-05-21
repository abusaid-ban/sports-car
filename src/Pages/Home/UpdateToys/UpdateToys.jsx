import { useLoaderData } from "react-router-dom";


const UpdateToys = () => {
    const update = useLoaderData();
    const {_id, price, quantity, details } = update;

    const handleUpdateToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const UpdatedToys = { price, quantity, details }
        console.log(UpdatedToys);

        fetch(`https://sports-toys-phero-server.vercel.app/myToys/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatedToys)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0 ) {
                    alert('New Toys Updated Successfully')
                }
            })

    }

    return (
        <div className="bg-slate-400 ">
            <h2 className="text-center text-3xl py-5 font-bold ">Update A Toys</h2>

            <form onSubmit={handleUpdateToys} >
                <div className=" mx-48 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price </span>
                        </label>
                        <input type="text" defaultValue={price} name="price" placeholder="price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="details" className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control mt-5 pb-2 w-1/2 mx-auto">
                    <input className="btn btn-primary" type="submit" value="Add Toys" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;