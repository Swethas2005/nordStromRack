import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaTshirt, FaShoePrints, FaChild, FaGift, FaHome, FaShoppingBag, FaHeartbeat, FaBox, FaTags } from "react-icons/fa";

function BelowHeader() {
    return (
        <div className="below-header">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color={"#186ADC"}>
                    New
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <MenuItem icon={<FaTshirt />}>New Arrivals</MenuItem>
                    <MenuItem icon={<FaShoePrints />}>Trending Now</MenuItem>
                    <MenuItem icon={<FaTags />}>Best Sellers</MenuItem>
                    <MenuItem icon={<FaBox />}>Special Offers</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color={"#B80009"}>
                    Clearance
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <MenuItem icon={<FaTshirt />}>Women's Clearance</MenuItem>
                    <MenuItem icon={<FaShoePrints />}>Men's Clearance</MenuItem>
                    <MenuItem icon={<FaChild />}>Kids' Clearance</MenuItem>
                    <MenuItem icon={<FaTags />}>Shoes Clearance</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Women
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaTshirt />}>Clothing</MenuItem>
                        <MenuItem icon={<FaShoePrints />}>Shoes</MenuItem>
                        <MenuItem icon={<FaShoppingBag />}>Accessories</MenuItem>
                        <MenuItem icon={<FaHeartbeat />}>Beauty</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Men
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaTshirt />}>Clothing</MenuItem>
                        <MenuItem icon={<FaShoePrints />}>Shoes</MenuItem>
                        <MenuItem icon={<FaShoppingBag />}>Accessories</MenuItem>
                        <MenuItem icon={<FaHeartbeat />}>Grooming</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Kids
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaChild />}>Boys</MenuItem>
                        <MenuItem icon={<FaChild />}>Girls</MenuItem>
                        <MenuItem icon={<FaChild />}>Baby</MenuItem>
                        <MenuItem icon={<FaShoppingBag />}>Accessories</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Shoes
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaShoePrints />}>Women's Shoes</MenuItem>
                        <MenuItem icon={<FaShoePrints />}>Men's Shoes</MenuItem>
                        <MenuItem icon={<FaShoePrints />}>Kids' Shoes</MenuItem>
                        <MenuItem icon={<FaTags />}>Sale Shoes</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Bags & Accessories
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaShoppingBag />}>Handbags</MenuItem>
                        <MenuItem icon={<FaTags />}>Jewelry</MenuItem>
                        <MenuItem icon={<FaHeartbeat />}>Watches</MenuItem>
                        <MenuItem icon={<FaShoppingBag />}>Hats</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Home
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaHome />}>Decor</MenuItem>
                        <MenuItem icon={<FaHome />}>Kitchen</MenuItem>
                        <MenuItem icon={<FaHome />}>Bedding</MenuItem>
                        <MenuItem icon={<FaHome />}>Furniture</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Beauty
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaHeartbeat />}>Makeup</MenuItem>
                        <MenuItem icon={<FaHeartbeat />}>Skincare</MenuItem>
                        <MenuItem icon={<FaHeartbeat />}>Haircare</MenuItem>
                        <MenuItem icon={<FaHeartbeat />}>Tools</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Gift Guide
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaGift />}>For Her</MenuItem>
                        <MenuItem icon={<FaGift />}>For Him</MenuItem>
                        <MenuItem icon={<FaGift />}>For Kids</MenuItem>
                        <MenuItem icon={<FaGift />}>For Home</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color={"#186ADC"}>
                    Flash Events
                </MenuButton>
                <MenuList bg="#f0f0f0" p={4}>
                    <Flex direction="column">
                        <MenuItem icon={<FaTags />}>Today's Deals</MenuItem>
                        <MenuItem icon={<FaTags />}>Limited Time</MenuItem>
                        <MenuItem icon={<FaTags />}>Special Discounts</MenuItem>
                        <MenuItem icon={<FaTags />}>Clearance</MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
        </div>
    );
}

export default BelowHeader;
