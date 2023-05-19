import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SportsCar from "./sportsCar";
import RegularCar from "./RegularCar";
import MiniPoliceCar from "./MiniPolice";


const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])



    console.log(categories[0]);
    return (
        <div>
            <div>
                <h2 className=' py-4 text-center text-5xl text-orange-500'>Shop By Category</h2>

            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Sports Car</Tab>
                        <Tab>Regular Car</Tab>
                        <Tab>Mini Police Car</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="flex justify-around mb-4">
                            {
                                categories[0]?.sportsCar?.map(category =>
                                    <SportsCar
                                        key={category.id}
                                        category={category}
                                    >

                                    </SportsCar>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                    <div className="flex justify-around mb-4">
                            {
                                categories[1]?.regularCar?.map(category =>
                                    <RegularCar
                                        key={category.id}
                                        category={category}
                                    >

                                    </RegularCar>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="flex justify-around mb-4">
                            {
                                categories[2]?.policeCar?.map(category =>
                                    <MiniPoliceCar
                                        key={category.id}
                                        category={category}
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