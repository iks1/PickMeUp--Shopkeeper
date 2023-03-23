import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import HomeIcon from '../assets/homeNav.svg';
import MenuIcon from '../assets/menuNav.svg';
import InsightsIcon from '../assets/insightsNav.svg';
import UpdatesIcon from '../assets/updatesNav.svg';
import HomeIconActive from '../assets/homeNavActive.svg';
import MenuIconActive from '../assets/menuNavActive.svg';
import InsightsIconActive from '../assets/insightsNavActive.svg';
import UpdatesIconActive from '../assets/updatesNavActive.svg';
  
const NavBar = () => {

    const [activeTab, setActiveTab] = useState('Home');
  
    const onTabPress = (tabName) => {
      setActiveTab(tabName);
    }
  
    return (

        <View style={styles.navBar}>

            <TouchableOpacity onPress={() => onTabPress('Home')} style={styles.tab}>

                {activeTab === 'Home' ? <HomeIconActive /> : <HomeIcon />}

                <Text style={activeTab === 'Home' ? styles.activeText : styles.text}>Home</Text>

            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => onTabPress('Menu')} style={styles.tab}>

                {activeTab === 'Menu' ? <MenuIconActive /> : <MenuIcon />}

                <Text style={activeTab === 'Menu' ? styles.activeText : styles.text}>Menu</Text>

            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => onTabPress('Insights')} style={styles.tab}>

                {activeTab === 'Insights' ? <InsightsIconActive /> : <InsightsIcon />}

                <Text style={activeTab === 'Insights' ? styles.activeText : styles.text}>Insights</Text>

            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => onTabPress('Updates')} style={styles.tab}>
                
                {activeTab === 'Updates' ? (<UpdatesIconActive />) : (<UpdatesIcon />)}

                <Text style={activeTab === 'Updates'? styles.activeText : styles.text}>Updates</Text>

            </TouchableOpacity>
      

        </View>
    );
};
  
const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      width: '100%',
      height: 64,
      bottom: 0,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 500,
        marginTop: 4,
        color: '#999999',
    },
    activeText: {
        fontSize: 12,
        fontWeight: 500,
        marginTop: 4,
        color: '#5932E6',
    },
});
  
export default NavBar;

