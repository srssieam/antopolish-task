import { useState } from "react";
import "./categoryStyle.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <h1 className="category-heading">Our Popular <span className="common-pink">Categories</span></h1>
            <div className="custom-tabs-container">
                <Tabs className="custom-tabs" selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    <TabList className="custom-tab-list">
                        <Tab className={`custom-tab ${activeTab === 0 ? "custom-tab active" : ""}`}>Pizzas</Tab>
                        <Tab className={`custom-tab ${activeTab === 1 ? "custom-tab active" : ""}`}>Burgers</Tab>
                        <Tab className={`custom-tab ${activeTab === 2 ? "custom-tab active" : ""}`}>Salads</Tab>
                        <Tab className={`custom-tab ${activeTab === 3 ? "custom-tab active" : ""}`}>Combos</Tab>
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
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;