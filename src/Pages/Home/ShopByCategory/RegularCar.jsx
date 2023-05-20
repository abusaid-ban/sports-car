import { Link } from "react-router-dom";


const RegularCar = ({car}) => {
    const {_id,picture,name,price,rating} = car;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body text-blue-700">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Ratings:{rating}</p>
          <div className="card-actions justify-end">
          <Link to={`/viewDetails/${_id}`}> <button className="btn btn-warning">View Details</button></Link>
           
          </div>
        </div>
      </div>
    );
};

export default RegularCar;