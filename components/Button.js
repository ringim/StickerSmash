import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {
    if(theme === 'primary') {
        return (
            <View style={styles.buttonContainer}>
            <Pressable 
            style={[styles.button, {backgroundColor: 'lightgreen'}]} 
            onPress={onPress}
            >
            <FontAwesome
            name="picture-o"
            size={18}
            color="black"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, {color: 'black'}]}>{label} </Text>
            </Pressable>
        </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable 
            style={[styles.button, {backgroundColor: 'lightblue'}]} 
            onPress={() => onPress }
            >

            <Text style={[styles.buttonLabel, {color: 'black'}]}>{label} </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        flexDirection: 'row',
    },


    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        padding: 4,
        borderRadius: 10,
        justifyContent: 'center',
        //backgroundColor: 'red',
        flexDirection: 'row',
    },

    buttonIcon: {
        paddingRight: 8,
    },
      
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },

});