import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc';

const RootLayout = () => {
    return (
        <SafeAreaView style={tw`flex-1`}>
            <StatusBar animated/>
            <Stack screenOptions={{ headerShown: false }}/>
        </SafeAreaView>
    )
}

export default RootLayout;