import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

const Homescreen = ({ navigation}) => {
    return (
        <View style={styles.container

        }>
            <Image 
                source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' }}
                style={{height:100, width:250, alignSelf:'center'}}
            />
            <Text style={styles.header}>Welcome to Pokedex App</Text>
            <Text style={styles.detail}>This app uses the PokéAPI to display information about Pokémon. Browse the list of Pokémon, search for specific ones, and view detailed information.</Text>

            <TouchableOpacity 
                style={styles.touch}
                onPress={() => navigation.navigate('Pokemon List')}
            >
                <Text style={styles.touchtext}>View Pokemon List</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detail: {
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    touch : {
        backgroundColor: '#eb4034',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius:100,
        shadowOffset: 20,
    },
    touchtext :{
        fontSize: 16,
        color:'white',
    }

})