import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Form, Item, Input, Label, Icon } from 'native-base';

const SingUp = () => {
    return (
        <View style={styles.container}>
            <Text style ={styles.title}>Sing Up for Free</Text>
            <Form>
                <Item inlineLabel>
                <Label>Name</Label>
                <Input/>
                </Item>
                <Item inlineLabel>
                <Label>Email</Label>
                <Input/>
                </Item>
                <Item inlineLabel>
                <Label>Password</Label>
                <Input/>
                </Item>
            </Form>
        <TouchableOpacity style={styles.button}>
            <Text>Sing Up</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.credentials}>
            <Text>SingUp with Facebook</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        backgroundColor:'#9a5cb0',

    },
    button:{
        marginTop:30,
        width:null,
        height:30,
        backgroundColor:'#8589bd',
        alignItems:'center',
        padding:5,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    credentials:{
        marginTop:30,
        alignItems:'center',
        padding:10,
        backgroundColor:'#2b66f8',
    }
})

export default SingUp

