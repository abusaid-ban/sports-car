import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {
    const [categories,setCategories]= useState([]);

    useEffect(()=>{
        fetch('category.json')
        .then(res=> res.json())
        .then(data => setCategories(data));
    },[])
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
                        <h2>Any content 1</h2>
                       
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
            <div> categories: {
                categories.length}</div>
        </div>
    );
};

export default ShopByCategory;