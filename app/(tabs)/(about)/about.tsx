import {View, Text} from "react-native";
import {AboutStyles} from "@/app/(tabs)/(about)/about.styles";

const About = () => {
    return (
        <View style={AboutStyles.container}>
            <Text style={AboutStyles.text}>About screen</Text>
        </View>
    );
}

export default About