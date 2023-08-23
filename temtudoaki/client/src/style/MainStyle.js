import { StyleSheet, Dimensions } from 'react-native';
import { generalSettings } from '../util/Colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    button: {
      width: "100%",
      marginTop: 10
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
    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start"
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
      fontSize: 12
    }
  });

export default styles