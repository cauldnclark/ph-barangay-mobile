import { Text, View } from "react-native";
import tw from 'twrnc';

const Index = () => {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg font-bold`}>Hello, World!</Text>
        </View>
    )
}

export default Index;