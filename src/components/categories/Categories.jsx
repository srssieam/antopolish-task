import { useEffect, useState } from "react";
import styles from "./CategoryStyle.module.css"
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

    // console.log(categoryData)
    return (
        <div>
            <h1 className="commonHeading">Our Popular <span className="common-pink">Categories</span></h1>
            <div className={styles.customTabsContainer}>
                <Tabs className={styles.customTabs} selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    <TabList className={styles.customTabList}>
                        <Tab className={`${styles.customTab} ${activeTab === 0 ? styles.active : ""}`}><IoPizzaOutline className="tab-icons" /> Pizzas</Tab>
                        <Tab className={`${styles.customTab} ${activeTab === 1 ? styles.active : ""}`}><PiHamburger className="tab-icons" /> Burgers</Tab>
                        <Tab className={`${styles.customTab} ${activeTab === 2 ? styles.active : ""}`}><LuSalad className="tab-icons" /> Salads</Tab>
                        <Tab className={`${styles.customTab} ${activeTab === 3 ? styles.active : ""}`}><IoFastFoodOutline className="tab-icons" /> Combos</Tab>
`                    </TabList>`
                    {/* pizza category */}
                    <TabPanel>
                        <Category styles={styles} foodItem={categoryData.pizzas} />
                    </TabPanel>

                    {/* burger category */}
                    <TabPanel>
                        <Category styles={styles} foodItem={categoryData.burgers} />
                    </TabPanel>

                    {/* salad category */}
                    <TabPanel>
                        <Category styles={styles} foodItem={categoryData.salads} />
                    </TabPanel>

                    {/* combos */}
                    <TabPanel>
                        <Category styles={styles} foodItem={categoryData.combos} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;