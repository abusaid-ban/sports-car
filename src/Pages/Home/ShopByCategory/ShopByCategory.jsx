import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SportsCar from "./sportsCar";
import RegularCar from "./RegularCar";
import MiniPoliceCar from "./MiniPolice";


const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [sports,setSports]= useState(null);
    const [cars,setCars]= useState(null);
    const [policeCars,setPoliceCars]= useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    const handleSportsCar = (id) => {
        const filtered = categories.filter(category => category.category_id == id);
        // console.log(filtered);
        setSports(filtered);
    };
    const handleRegularCar = (id) => {
        const filtered = categories.filter(category => category.category_id == id);
        // console.log(filtered);
        setCars(filtered);
    };
    const handlePoliceCar = (id) => {
        const filtered = categories.filter(category => category.category_id == id);
        // console.log(filtered);
        setPoliceCars(filtered);
    };


    return (
        <div>
            <div>
                <h2 className=' py-4 text-center text-5xl text-orange-500'>Shop By Category</h2>

            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab> <button onClick={() => handleSportsCar(1)}>Sports Car</button>
                        </Tab>
                        <Tab> <button onClick={() => handleRegularCar(2)}>Regular Car</button></Tab>
                        <Tab><button onClick={() => handlePoliceCar(3)}>Mini Police Car</button></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="flex justify-around mb-4">
                            {
                                sports?.map(sport => <SportsCar key={sport.id}
                                    sport={sport}
                                ></SportsCar>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="flex justify-around mb-4">
                            {
                                cars?.map(car =>
                                    <RegularCar
                                        key={car.id}
                                        car={car}
                                    >

                                    </RegularCar>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex justify-around mb-4">
                            {
                                policeCars?.map(policeCar =>
                                    <MiniPoliceCar
                                        key={policeCar.id}
                                        policeCar={policeCar}
                                    >

                                    </MiniPoliceCar>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ShopByCategory;