import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    StatusBar,
    Image
} from 'react-native'

import { styles } from './Style'
import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons'

const Jokes = () => {

    const API_URL = 'http://192.168.1.5:4000/api';
    const [jokes, setJokes] = useState([]);

    const fetchJokes = async () => {
        try {
            const response = await axios.get(`${API_URL}/posts`);
            setJokes(response.data);
            // console.log(response.data[0].title);
        } catch (error) {
            console.error("Error fetching jokes:", error);
        }
    };

    useEffect(() => {
        fetchJokes();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#dada'} />
            <Text style={styles.title}>Posts Data</Text>
            <Text style={styles.subtitle}>
                There are {jokes.length} Products Available
            </Text>
            <View style={styles.wrapper}>
                {
                    jokes ? jokes.map((item, index) =>
                        <View key={index} style={styles.card}>
                            <Image
                                source={{ uri: item.img }}
                                style={styles.img}
                            />
                            <Text>
                                {item.desc}
                            </Text>
                            <View style={styles.iconView}>
                                <Text>
                                    {item.price} $
                                </Text>
                                <Icon
                                    name='add'
                                    size={24}
                                    color='seagreen'
                                />
                            </View>
                        </View>
                    )
                        :
                        <Text>Loading</Text>
                }
            </View>
        </View>
    )
}

export default Jokes