import {StyleSheet} from "react-native";

const styles = StyleSheet.create ({

  container:{
    flex:1,
    backgroundColor: "white",
    padding: 16,
  },

  input:{
    flex:1,
    borderColor:"lightgray",
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 8,
    padding: 8
  },

  inputRow:{
    marginBottom: 12,
    flexDirection: "row"
  },

  header:{
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold"
  },

  deleteButton: {
    fontWeight: "bold",
    marginRight: 8,
    color: "red"
  },

  countButton: {
    fontSize:20,
    marginHorizontal: 8
  },

  countText:{
    width: 30,
    textAlign: "center"
  },

  habitItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "gray",
    padding: 8,
    marginBottom: 8
  },

  habitName:{
    flex:1
  },

  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default styles;