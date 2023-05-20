import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import NewAddedtoys from "./NewAddedtoys";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [newToys, setNewToys] = useState([]);
    const url = `http://localhost:5000/products?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setNewToys(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Seller name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newToys.map(toys => <NewAddedtoys
                                key={toys._id}
                                toys={toys}
                            ></NewAddedtoys>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;