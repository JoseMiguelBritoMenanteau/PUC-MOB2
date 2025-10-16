import { StyleSheet, Text, View , ScrollView, Button, FlatList, TextInput, Keyboard, TouchableOpacity, Alert, Pressable } from 'react-native';
import React, {useState, useEffect, useRef} from "react";

import stylesTaskBox from './styles-TaskBox.js';



export default function TaskBox() {



    return (
        <View style = {stylesTaskBox.container}>
            <Pressable
                title = 'X'
                onPress = {() => Alert.alert.alert('Eliminar tarea')} />
            <Text></Text>
            <Pressable
                title = '-'
                onPress = {() => Alert.alert.alert('Bajar')} />
            <Text>Primera Tarea</Text>
            <Pressable
                title = '+'
                onPress = {() => Alert.alert.alert('Subir')}  />
        </View>
    );
};


