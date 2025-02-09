import { Text, View } from "react-native";
import tw from 'twrnc';

const NotFoundPage = () => {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg font-bold`}>Oops! Page Not Found</Text>
        </View>
    )
}

export default NotFoundPage;