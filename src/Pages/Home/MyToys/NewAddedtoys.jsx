import { Link } from "react-router-dom";


const NewAddedtoys = ({ toys, handleDelete }) => {
    const { _id, name, seller_name, email, photo, price, quantity } = toys;

    return (
        <tr>

            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td>
                {name}

            </td>
            <td>{seller_name}</td>
            <td>{email}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
            <th>
                {/* <button onClick={()=> handleUpdate(_id)} className="btn btn-ghost btn-xs">update</button> */}
                <Link to={`/updateToys/${_id}`}>
                    <button className="btn btn-ghost btn-xs">update</button>
                    </Link>
            </th>
        </tr>
    );
};

export default NewAddedtoys;