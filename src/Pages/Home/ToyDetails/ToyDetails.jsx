import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const products = useLoaderData();
    const { seller_name, seller_email, description, picture, name, sub_category, rating, price, quantity } = products;
    return (
        <div className="flex  bg-slate-800 gap-5">

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
            </div>
            <div className="card-body text-left">
                <h1 className="card-title text-4xl text-red-600">{name}</h1>
                <h2 className="text-2xl text-white">{description}</h2>
                <h2 className="text-2xl text-white">Category :{sub_category}</h2>
                <h2 className="text-2xl text-white"> Seller Name :{seller_name}</h2>
                <h2 className="text-2xl text-white"> Email:{seller_email}</h2>
                <h2 className="text-2xl text-white"> Ratings:{rating}</h2>
                <h2 className="text-2xl text-white"> Price:${price}</h2>
                <h2 className="text-2xl text-white"> Quantity:${quantity}</h2>
                
            </div>

        </div>
    );
};

export default ToyDetails;