import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
        gap: 24
    },
    title:{
        fontSize: 24,
        letterSpacing: 0.5,
        color: 'seagreen',
        fontWeight: '900'
    },
    subtitle:{
        fontSize: 20,
        color: '#dadade',
    },
    wrapper:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 24,
        alignItems: 'center'
    },
    img:{
        width: '100%',
        height: 200,
        borderRadius: 4
    },
    card:{
        backgroundColor: '#fff',
        padding: 8,
        gap: 12,
        width: '45%',
        shadowColor: '#000',
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 6,
        borderRadius: 2
    },
    iconView:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})