import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                       
                        <th>Seller Name</th>
                        <th> Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                       




                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map(allToy => <AllToysRow
                            key={allToy._id}
                            allToy={allToy}
                        ></AllToysRow>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
