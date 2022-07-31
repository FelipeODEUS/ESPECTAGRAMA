//Tinha faltado importar o React:
import React from "react";
/*Você havia colocado assim:
import {CreateBottomNavigator} from "react-navigation/bottom-tabs.";
só que o createBottomTabNavigator é com c minúsculo e
quando vai importar, faltou o @ no começo e ficou sobrando um ponto no fim*/
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//Tinha faltado importar os Ionicons também
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from "../screens/CreatePost";
import Feed from "../screens/Feed";

//Faltou criar essa constante:
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({ route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
  //O nome do route na linha de baixo tinha que ser igual o da linha 39
                    } else if(route.name === 'CriarPost'){ //tava createPost
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name = {iconName} size={size} color={color} />
                },
            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CriarPost" component={CreatePost} />
        </Tab.Navigator>
    )
}

//Tinha faltado exportar o componente BottomTabNavigator
export default BottomTabNavigator;