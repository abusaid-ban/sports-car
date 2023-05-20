

const SearchItems = ({ toy }) => {
    const { seller_name, name, sub_category, price, quantity } = toy;
    return (
        <table className="table w-full">
            <thead>
                <tr>

                    <th>Search Result</th>
                    {/* <th> Toy Name</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Details</th> */}
                </tr>
            </thead>

            <tbody>
                <tr>

                    <td>{seller_name}</td>
                    <td>{name}</td>
                    <td>{sub_category}</td>
                    <td>${price}</td>
                    <td>{quantity}</td>
                    <td><button className="btn btn-warning">View Details</button></td>
                </tr>
            </tbody>
        </table>
    );
};

export default SearchItems;