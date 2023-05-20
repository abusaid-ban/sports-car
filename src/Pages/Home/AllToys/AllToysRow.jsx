

const AllToysRow = ({ allToy }) => {
    const {seller_name,name,sub_category,price,quantity} = allToy;
    return (
        
            <tr>
               
                <td>{seller_name}</td>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-warning">View Details</button></td>
            </tr>
        
    );
};

export default AllToysRow;