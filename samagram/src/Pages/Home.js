import React from 'react'
import { View, Text, StyleSheet, Picker, TouchableOpacity} from 'react-native'

const Home  = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.lable}>SamaGram</Text>
            <TouchableOpacity >
                <Text>Log In With Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    lable:{
        marginTop:250,
        fontSize:30,
        fontWeight:'bold',
        
    }, 
    
})
export default Home;
