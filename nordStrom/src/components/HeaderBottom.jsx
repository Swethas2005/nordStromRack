import React from 'react';
import { Flex, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "../components/HeaderBottom.css";
import BelowHeader from './BelowHeader';

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
                    <input type="text" placeholder="Search for products or brands" className='search' />
                </Flex>
                <Menu>
                    <MenuButton as={Button} variant="outline" ml={39}>
                        Sign In
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Sign out</MenuItem>
                    </MenuList>
                </Menu>
                <div className="stores-container">
                    <img src="./assets/Stores.png" alt="Stores" className="stores-image" />
                    <a href="#" className="stores-link">Stores</a>
                </div>

                <div className="purchases-container">
                    <img src=" ./assets/Purchases.png" alt=" Purchases" className="purchases-logo" />
                    <a href="#" className="purchases-link">Purchases</a>
                </div>

                <div className="bag-container">
                    <img src="./assets/Bag" alt="Bag" className="   bag-logo" />
                    <a href="#" className="bag-link"></a>
                </div>
                
            </div>
            {/* Header Bottom-Section-End */}

            <div>
                <BelowHeader />
            </div>

        </div>

       
    );
}

export default HeaderBottom;
