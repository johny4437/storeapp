import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const Brand = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Sama Food</Text>
           

           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    label:{
        marginTop:60,
        fontSize:22,
        fontWeight:'bold',
        alignItems:'center',
    },
    image:{
        width:100,
        height:50,
    }
})
export default Brand
