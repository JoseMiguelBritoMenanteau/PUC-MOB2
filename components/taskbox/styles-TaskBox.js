import {StyleSheet} from "react-native";


const stylesTaskBox = StyleSheet.create ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        height: 60,
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'hsla(240, 13%, 52%, 0.19)',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
        


    },

    pressable_bin: {
        backgroundColor: 'hsla(0, 81%, 65%, 0.91)',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    pressable_bajar: {
        backgroundColor: 'hsla(0, 7%, 51%, 0.46)',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    pressable_subir: {
        backgroundColor: 'lightblue',
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    values: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },

    centrado: {
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
        includeFontPadding: false,

    }
});



export default stylesTaskBox;

