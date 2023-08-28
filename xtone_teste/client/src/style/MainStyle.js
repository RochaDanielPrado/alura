import { StyleSheet, Dimensions } from 'react-native';
import { generalSettings } from '../util/Colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    button: {
      width: width * 0.8,
      marginTop: 10,
      borderRadius:5,
    },  
    cancelButton: {
      backgroundColor: "#c00"
    },
    container: {
      flex: 1,
      backgroundColor: `${generalSettings.primaryColor}`,
      alignItems: 'center',
      justifyContent: 'center',
      // height: height / 1.13,
      // overflow: 'hidden',
      // backgroundColor: 'blue',
    },

    input: {
      backgroundColor: generalSettings.fontColor,
      paddingLeft: 10,
      borderRadius: 5,
  
    },

    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start",
      color: generalSettings.primaryColor,
    
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 25,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: generalSettings.fontColor,
      paddingLeft: 10,
      borderRadius: 5,
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
      fontSize: 12
    }
  });

export default styles