import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Options from "./Meteor_Game";
import Options2 from "./Options2";
import Options3 from "./Options3";
import Meteor from "./Meteor";
import Bunker from "./Bunker";
import Europe from "./Europe";
import US from "./US";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Meteor_Game" component={Options} />
        <MainStack.Screen name="Missile" component={Options2} />
        <MainStack.Screen name="Bunker" component={Bunker} />
        <MainStack.Screen name="Meteor" component={Meteor} />
        <MainStack.Screen name="Options3" component={Options3} />
        <MainStack.Screen name="Europe" component={Europe} />
        <MainStack.Screen name="US" component={US} />
    </MainStack.Navigator>
);

export default () => (
<NavigationContainer>
    <MainStackScreen></MainStackScreen>
    </NavigationContainer>
    );
