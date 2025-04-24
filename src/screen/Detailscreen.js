import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Detailscreen = ({ navigation, route }) => {
    const { pokemon: intialPokemon, clearSelection } = route.params || {};
    const [pokemon, setPokemon] = useState(intialPokemon);

    useEffect(() => {
        setPokemon(intialPokemon);
    }, [intialPokemon]);

    if (!pokemon) {
        return (
            <View style={styles.container}>
                <Text style={styles.details}>Pleses select a Pokemon from the Pokemon List tab to view details</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Pokemon List')}
                >
                    <Text style={styles.buttonText}>View Pokemon List</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const capitalizeFristLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const backimage = pokemon.sprites?.back_default;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/*About Pokemon show*/}
            <View style={styles.containerDetails}>
                <Text style={styles.id}>{pokemon.id}</Text>
                <Text style={styles.name}>{pokemon.name}</Text>
                <View style={styles.typesContainer}>
                    {pokemon.types.map((type, index) => (
                        <View key={index} style={[styles.typeBadge, {backgroundColor: type.color}]}>
                            <Text style={styles.typeText}>{type.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
    

            {/*image*/}
            <View style={[styles.containerDetailsText, {flexDirection:'row', justifyContent:'space-around'}]}>
                <View style={styles.showImage}>
                    <Text style={styles.title}>Front</Text>
                    <Image source={{uri: pokemon.image}} style={styles.image}/>
                </View>

                <View style={styles.showImage}>
                    <Text style={styles.title}>Back</Text>
                    <Image source={{uri: pokemon.backimage}} style={styles.image}/>
                </View>
            </View>


            {/*bast stats*/}
            <View style={styles.containerDetailsText}>
                <Text style={styles.title}>Base Stats</Text>
                {pokemon.baseStats.map((stat, index) => (
                    <View key={index} style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>{capitalizeFristLetter(stat.name)}
                        </Text>
                        <Text style={styles.detailsValue}>{stat.value}
                        </Text>
                    </View>
                ))}
            </View>


            {/*details*/}
            <View style={styles.containerDetailsText}>
            <Text style={styles.title}>Details</Text>
                <View>
                    <Text>Height:       {pokemon.height} m</Text>
                    <Text>weight:       {pokemon.weight} m</Text>
                </View>
            </View>


            {/*ability*/}
            <View style={styles.containerDetailsText}>
                <Text style={styles.title}>Abilities</Text>
                {pokemon.abilities.map((ability, index) => (
                    <Text key={index} style={styles.textdetails}>{capitalizeFristLetter(ability)}</Text>
                ))}
            </View>


            {/*move 5 frist*/}
            <View style={styles.containerDetailsText}>
                <Text style={styles.title}>Moves</Text>
                {pokemon.moves.map((move, index) => (
                    <Text key={index} style={styles.textdetails}>{capitalizeFristLetter(move)}</Text>
                ))}
            </View>


            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.buttonLong, { backgroundColor: 'orange' }]}
                    onPress={() => {
                        setPokemon(null);
                        if (clearSelection) {
                            clearSelection();
                        }
                    }}>
                    <Text style={styles.buttonText}>Clear Selection</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonLong, { backgroundColor: 'blue' }]}
                    onPress={() => { navigation.navigate("Pokemon List") }}>
                    <Text style={styles.buttonText}>Back to Pokemon List Page</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Detailscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center'
    },
    containerDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#fff',
        padding: 20
    },
    containerDetailsText: {
        margin: 5,
        backgroundColor: '#fff',
        padding: 20
    },
    button: {
        backgroundColor: '#eb4034',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 100,
        shadowOffset: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: 'grey',
    },
    textdetails: {
        fontSize: 16,
        color: 'grey',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    typesContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    typeBadge: {
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 5,
    },
    typeText: {
        fontSize: 14,
        color: 'white',
        textTransform: 'capitalize',
    },
    id: {
        color: 'grey',
        fontSize: 16,
    },
    buttonLong: {
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
        width: '95%',
        alignSelf: 'center',
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 20,
    },
    showImage: {
        flexDirection: 'column',
        backgroundColor: '#F3F3F3FF',
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    detailsLabel: {
        fontSize: 16,
        color: 'grey',
    },
    detailsValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

