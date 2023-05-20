

const NewAddedtoys = ({ toys }) => {
    const { name, seller_name,email, photo, price, quantity } = toys
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default NewAddedtoys;