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


 

const screens = {
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