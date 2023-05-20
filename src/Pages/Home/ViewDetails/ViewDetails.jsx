import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const products = useLoaderData();
    const {seller_name,description,picture,name,sub_category,price,quantity } = products;
    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-3">{description}</p>
                        <p className="py-3">Seller Name :{seller_name}</p>
                        <p className="py-3">Category:{sub_category}</p>
                        <p className="py-3">Price:${price}</p>
                        <p className="py-3">Quantity:${quantity}</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;