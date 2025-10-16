import {StyleSheet} from "react-native";


const stylesTaskBox = StyleSheet.create ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pressable_bin: {
        backgroundColor: 'red',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pressable_bajar: {
        backgroundColor: 'grey',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pressable_subir: {
        backgroundColor: 'lightblue',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});



export default stylesTaskBox;

