import { useState } from "react";
import orderCover from "../../../assets/All/cover2.jpg";
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useBook from "../../../hooks/useBook";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "Mystery",
    "Fiction",
    "Fantasy",
    "Horror",
    "History",
    "Offered",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [book] = useBook();

  console.log(category);
  // const [tabIndex, setTabIndex] = useState(0);
  // const [book] = useBook();

  const mystery = book.filter((item) => item.category === "Mystery");
  const fiction = book.filter((item) => item.category === "Fiction");
  const fantasy = book.filter((item) => item.category === "Fantasy");
  const horror = book.filter((item) => item.category === "Horror");
  const history = book.filter((item) => item.category === "History");
  const offered = book.filter((item) => item.category === "Offered");

  return (
    <div className="text-sm text-center ">
      <Helmet>CP Bookshop | Order Book</Helmet>
      <Cover img={orderCover} title="Order Book"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Mystery</Tab>
          <Tab>Fiction</Tab>
          <Tab>Fantasy </Tab>
          <Tab>Horror</Tab>
          <Tab>History</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={mystery}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={fiction}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={fantasy}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={horror}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={history}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
