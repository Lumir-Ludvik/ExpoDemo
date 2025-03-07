import { StyleSheet, View, Pressable, Text } from 'react-native';
import {ButtonStyles} from "@/components/button/button.styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string;
    theme?: 'primary';
};

const Button = ({ label, theme }: Props) => {
    if (theme === 'primary') {
        return (
            <View
                style={[
                    ButtonStyles.buttonContainer,
                    { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
                ]}>
                <Pressable
                    style={[ButtonStyles.button, { backgroundColor: '#fff' }]}
                    onPress={() => alert('You pressed a button.')}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={ButtonStyles.buttonIcon} />
                    <Text style={[ButtonStyles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={ButtonStyles.buttonContainer}>
            <Pressable style={ButtonStyles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={ButtonStyles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

export default Button;