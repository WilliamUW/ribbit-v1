"use client";

import { Box, Divider, IconButton, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Spacer
} from "@chakra-ui/react";
import { FiAward, FiBell, FiChevronLeft, FiChevronRight, FiCompass, FiHome, FiSettings } from "react-icons/fi";
import React, { useState } from "react";

import { Input } from 'antd';
import {
  RibbitLogo,
} from "../Icons/Icons";

const topics = [
  "Dad Jokes",
  "Tech Puns",
  "Puns",
  "Tech Life",
  "Shower Thoughts",
  "Space Dogs",
  "Food Jokes",
  "Weather Puns",
  "Gen Z Trends",
  "Late Night Thoughts"
];

const { Search } = Input;

type SidebarProps = {
  setCurrentTopic: (arg0: string) => void;
};

const Sidebar = ({ setCurrentTopic }: SidebarProps) => {
  const [topics, setTopics] = useState([
    "All",
    "Dad Jokes",
    "Tech Puns",
    "Puns",
    "Tech Life",
    "Shower Thoughts",
    "Space Dogs",
    "Food Jokes",
    "Weather Puns",
    "Gen Z Trends",
    "Late Night Thoughts"
  ]);
  const [searchFilter, setSearchFilter] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onSearch = (value: React.SetStateAction<string>) => {
    console.log("Search: ", value);
    setSearchFilter(value);
  };
  const onAddTopic = (value: string) => {
    if (value !== "" && !topics.includes(value)) {
      setTopics([...topics, value]);
      console.log("On Add Topic: ", value);
    }
};
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <IconButton
        icon={isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
        onClick={handleSidebarToggle}
        position="fixed"
        bottom="5%"
        left={isSidebarOpen ? "48px" : "48px"}
        top="95%"
        transform="translateY(-50%)"
        color={'black'}
        zIndex="999" aria-label={""}/>

      {isSidebarOpen && (
        <Box
          bg="white"
          maxWidth={"500px"}
          p={5}
          shadow="md"
          borderRadius="md"
          h={"calc(100vh)"}
          textColor={"black"}
          // padding={48}
          paddingLeft={20}
        >
          <Flex direction={"row"} gap={"10px"}>
          </Flex>
          <Flex direction={"column"} justifyContent={"space-around"} alignItems="center">
            <div style={{marginLeft: "100px", marginRight: "100px"}}><RibbitLogo /></div>
          
            <Flex direction={"column"} gap={"30px"} mt={"40px"} fontSize={"18px"}>
              <Flex direction={"row"}>
              <Search
                placeholder="Add Topic"
                allowClear
                enterButton="+"
                size={"middle"}
                onSearch={onAddTopic}
              />
              </Flex>
              <Flex direction={"row"}>
              <Search
                placeholder="Search Topic"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
              </Flex>
              {searchFilter !== "" && <Text>Current Search: {searchFilter}</Text>}
              <div style={{ maxHeight: "450px", overflowY: "auto" }}>
                {topics
                  .filter(topic => searchFilter === "" || topic.includes(searchFilter))
                  .map((topic, index) => (
                    <Flex key={index} direction="row" onClick={() => setCurrentTopic(topic)} marginBottom="10px">
                      <Icon as={FiAward} />
                      <Text>{topic}</Text>
                    </Flex>
                  ))}
              </div>
              
            </Flex>
            
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
