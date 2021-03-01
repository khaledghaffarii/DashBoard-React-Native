import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screens from './Screens';
import Auth from './Auth';
//import Overview from "./Overview";
// Loading screen
import ProjectShow from "../screens/ProjectShow";
import Project from '../screens/Project'
import Disipline from "../screens/Disipline";
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth,
    ProjectShow,
    Project,
    Disipline,
  
    Main: Screens,
  })
);