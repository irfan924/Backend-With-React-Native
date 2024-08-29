import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

const PrimaryButton = () => {
    return (
        <TouchableOpacity
            style={styles.btn}
        >
            <Text style={styles.btnText}>
                Get Data
            </Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        height: 56,
        borderRadius: 28,
        backgroundColor: 'seagreen',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText:{
        fontSize: 20,
        letterSpacing: 0.1,
        fontFamily: 'Poppins-Regular',
        color: '#fff',
    }
})