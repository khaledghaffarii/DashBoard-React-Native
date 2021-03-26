import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Screens from './Screens';
import Auth from './Auth';
//import Overview from "./Overview";
// Loading screen
import ProjectShow from "../screens/ProjectShow";
import Project from '../screens/Project'
import Disciplined from "../screens/Disipline";
import Project_Details from '../screens/ ProjectDetail';
import Discipline_list from '../screens/Discipline_list'
import { createStackNavigator } from 'react-navigation-stack';
import Authenticate from "../screens/Authenticate";
import Type_details from "../screens/Type_details";
import Civil_Engineering from "../screens/Civil_Engineering";
import Piping_Engeneering from "../screens/Piping_Engeneering";
import Intrumentation from "../screens/Intrumentation";
import Electrical_Engineering from "../screens/elecric";
import Quantity_Tracking from "../screens/quantity_tracking";

const screens = {
  // Authenticate:{
  //    screen: Authenticate,
  // },
  All_Project: {
    screen: Project,
  },
  ProjectShow: {
    screen: ProjectShow,
  },
  Disciplined: {
    screen: Disciplined,
  },
  Project_Details: {
    screen: Project_Details,
  },
  Discipline_list: {
    screen: Discipline_list,
  },
  Type_Construction: {
    screen: Type_details,
  },
  // Civil_Engineering: {
  //   screen: Civil_Engineering,
  // },
  // Piping_Engeneering: {
  //   screen: Piping_Engeneering,
  // },
  // Intrumentation: {
  //   screen: Intrumentation,
  // },
  // Electrical_Engineering: {
  //   screen: Electrical_Engineering,
  // },
  Quantity_Tracking: {
    screen: Quantity_Tracking,
  },
};
const AppNavigator = createStackNavigator(screens);

export default createAppContainer(AppNavigator);
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html



   // createSwitchNavigator({
  //   Auth,
  //   ProjectShow,
  //   Project,
  //   Disipline,

  //   Main: Screens,
  // })