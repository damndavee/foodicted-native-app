import { Link, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Heading } from 'native-base';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from '../src/components/buttons/Button';

const AuthScreen = () => {
    const insets = useSafeAreaInsets();
    const params = useLocalSearchParams();
    
    const AUTHTYPEPLACEHOLDER = params.type === 'signup' ? 'SIGNUP' : 'SIGNIN';

    const onClickyClick = () => {
        console.log("PARMAS: ", params);
        router.setParams({type: params.type === 'signup' ? 'signin' : 'signup'});
    }
    
    return (
        <View style={{paddingTop: insets.top}}>
            <Heading alignSelf='center'>{AUTHTYPEPLACEHOLDER}</Heading>
            <Text>AuthScreen</Text>
            <Text>=========================</Text>
            {AUTHTYPEPLACEHOLDER === 'SIGNUP' && <Text>NICKNAME</Text>}
            <Text>EMAIL</Text>
            <Text>PASSWORD</Text>
            {AUTHTYPEPLACEHOLDER === 'SIGNUP' && <Text>CONFIRM PASSWORD</Text>}
            <Text>=========================</Text>

            <Link href="/"><Text>Go back!</Text></Link>
            <Button label='Change auth type' onPress={() => onClickyClick()} size='Medium' type='Tertiary' variant='Filled' fullWidth />
        </View>
    ) 
}

export default AuthScreen

const styles = StyleSheet.create({})