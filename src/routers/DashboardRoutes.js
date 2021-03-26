import React, {Fragment} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Navbar } from '../ui/Navbar';
import { HomeScreen } from '../components/home/HomeScreen';
import { AboutUsScreen } from '../components/aboutUs/AboutUsScreen';
import { BlogScreen } from '../components/blog/BlogScreen';
import { BrandsScreen } from '../components/brands/BrandsScreen';
import { GardeningScreen } from '../components/gardening/GardeningScreen';
import { JanitorialScreen } from '../components/janitorial/JanitorialScreen';
import { OfficeSuppliesScreen } from '../components/officeSupplies/OfficeSuppliesScreen';
import { SafetyScreen } from '../components/safety/SafetyScreen';
import { ToolsScreen } from '../components/tool/ToolsScreen';
import { WoodworkingScreen } from '../components/woodworking/WoodworkingScreen';
import {Footer} from '../ui/Footer';
import { ProductScreen } from '../products/ProductScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = ({history}) => {
  return (
    <Fragment>
      <Navbar history={history}/>
      <div>
        <Switch>
          <Route exact path='/home' component={HomeScreen}/>
          <Route exact path='/safety' component={SafetyScreen}/>
          <Route exact path='/janitorial' component={JanitorialScreen}/>
          <Route exact path='/tools' component={ToolsScreen}/>
          <Route exact path='/woodworking' component={WoodworkingScreen}/>
          <Route exact path='/gardening' component={GardeningScreen}/>
          <Route exact path='/officesupplies' component={OfficeSuppliesScreen}/>
          <Route exact path='/blog' component={BlogScreen}/>
          <Route exact path='/brands' component={BrandsScreen}/>
          <Route exact path='/aboutus' component={AboutUsScreen}/>
          <Route exact path='/product/:productId' component={ProductScreen}/>
          <Route exact path='/search/:search' component={SearchScreen}/>
          <Redirect to='/home' component={HomeScreen}/>
        </Switch>
      </div>
      <Footer/>
    </Fragment>
  )
}
