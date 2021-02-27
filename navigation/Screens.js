
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./Overview";
import Project from '../screens/Project';
 //import Master_Document_Register from "../screens/Master_Document";
 //import Expediting_Trucker_Register from '../screens/Expediting';
 //import Shipment_Trucking_Register from '../screens/Shipment';
import Procurement_Trucking_Register from "../screens/Procurement";
export default createDrawerNavigator({
  Home,
  Project,
  //Master_Document_Register,
  //Expediting_Trucker_Register,
  //Shipment_Trucking_Register,
  //Procurement_Trucking_Register,
});
