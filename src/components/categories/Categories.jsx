import { useEffect, useState } from "react";
import "./categoryStyle.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// import icons from react icon
import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { LuSalad } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import Category from "./Category";


const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        fetch('/categoryData.json')
            .then((response) => response.json())
            .then((data) => setCategoryData(data));
    }, [])

    console.log(categoryData)
    return (
        <div>
            <h1 className="category-heading">Our Popular <span className="common-pink">Categories</span></h1>
            <div className="custom-tabs-container">
                <Tabs className="custom-tabs" selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    <TabList className="custom-tab-list">
                        <Tab className={`custom-tab ${activeTab === 0 ? "custom-tab active" : ""}`}><IoPizzaOutline className="tab-icons" /> Pizzas</Tab>
                        <Tab className={`custom-tab ${activeTab === 1 ? "custom-tab active" : ""}`}><PiHamburger className="tab-icons" /> Burgers</Tab>
                        <Tab className={`custom-tab ${activeTab === 2 ? "custom-tab active" : ""}`}><LuSalad className="tab-icons" /> Salads</Tab>
                        <Tab className={`custom-tab ${activeTab === 3 ? "custom-tab active" : ""}`}><IoFastFoodOutline className="tab-icons" /> Combos</Tab>
                    </TabList>

                    {/* pizza category */}
                    <TabPanel>
                        <Category foodItem={categoryData.pizzas} />
                    </TabPanel>

                    {/* burger category */}
                    <TabPanel>
                        <Category foodItem={categoryData.burgers} />
                    </TabPanel>

                    {/* salad category */}
                    <TabPanel>
                        <Category foodItem={categoryData.salads} />
                    </TabPanel>

                    {/* combos */}
                    <TabPanel>
                        <Category foodItem={categoryData.combos} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;