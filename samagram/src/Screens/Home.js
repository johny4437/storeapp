import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import Brand from './Brand';




const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Brand/>
           <Form style={styles.form}>
               <Item inlineLabel>
                   <Label>Username</Label>
                   <Input style={styles.input}/>
               </Item>
               <Item inlineLabel>
                   <Label>Password</Label>
                   <Input style={styles.input}/>
               </Item>
            </Form>
            <Button title="Sing In"/>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SingUp')} 
            style={styles.button} >
                <Text>You don't have an account?SingUp</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#E2CFDE',
    
    },
    form:{
        marginTop:200,
        marginBottom:40,
    },
    input:{
        borderStyle:'solid',
        borderBottomWidth:1,
    },
    button:{
        marginTop:30,
        alignItems:'center',

    }
})

export default Home

