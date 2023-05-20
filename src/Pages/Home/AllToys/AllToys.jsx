import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import SearchItems from "./SearchItems";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    const [searchTerm, setSearchTerm] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);
 

  // Function to handle search form submit
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    filterToys(searchTerm);
  };

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
   
  };

  // Function to filter toys based on search term
  const filterToys = (term) => {
    const filtered = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredToys(filtered);
   
  };

    return (
        <div>
            <div className="text-center my-5">
                <form onSubmit={handleSearchFormSubmit}>
                    <input className=" p-4 border border-blue-600 rounded-lg text-orange-400"
                        type="text"
                        placeholder="Search by Toy name"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <button className=" ml-2 btn btn-success" type="submit">Search</button>
                </form>
            </div>
            <div>
                {
                    filteredToys.map(toy =>
                         <SearchItems
                          key={toy.id}
                          toy={toy}
                          >

                          </SearchItems> )
                  
                }
            </div>
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
                            <th>Details</th>
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
            
        </div>
    );
};

export default AllToys;
