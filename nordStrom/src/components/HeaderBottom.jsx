import React from 'react';
import {  Flex, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "../components/HeaderBottom.css";

function HeaderBottom() {
    return (
        <div className="headerBottomContainer">
            {/* Header Bottom-Section */}
            <div className="headerBottom">
                <img id="brand-logo" src="https://seeklogo.com/images/N/nordstrom-rack-logo-9C42362F49-seeklogo.com.png" alt="Brand-logo" />
                <Flex className="search-bar-container">
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L18.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    <input className='search' type="text" placeholder="Search for products or brands" />
                </Flex>
                <Menu>
                    <MenuButton  as={Button} variant="outline" ml={40}>
                        Sign In
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Sign out</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            {/* Header Bottom-Section-End */}
        </div>
    );
}

export default HeaderBottom;
