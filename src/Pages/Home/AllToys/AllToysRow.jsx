import { Link } from "react-router-dom";


const AllToysRow = ({ allToy }) => {
    const {_id, seller_name, name, sub_category, price, quantity } = allToy;
    return (

        <tr>

            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toyDetails/${_id}`}> <button className="btn  btn-warning">View Details</button></Link>
            </td>
        </tr>

    );
};

export default AllToysRow;