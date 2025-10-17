import { StyleSheet, Text, View , ScrollView, Button, FlatList, TextInput, Keyboard, TouchableOpacity, Alert, Pressable } from 'react-native';
import React, {useState, useEffect, useRef} from "react";

import stylesTaskBox from './styles-TaskBox.js';



export default function TaskBox({habito, Remove, Restar, Sumar}) {





    return (
        <View style = {stylesTaskBox.container}>
            <Pressable
                onPress = {Remove}
                style = {stylesTaskBox.pressable_bin}>
                <Text>
                    X
                </Text>

            </Pressable>

            <Text>{habito.name}</Text>
            {habito.count > 0 && (
            <Pressable
                onPress = {Restar}
                style = {stylesTaskBox.pressable_bajar}>
                <Text>
                    -
                </Text>

            </Pressable>
            )}
            <Text>{habito.count}</Text>
            <Pressable
                onPress = {Sumar}
                style = {stylesTaskBox.pressable_subir}>
                <Text>
                    +
                </Text>

            </Pressable>
            

        </View>
    );
};


