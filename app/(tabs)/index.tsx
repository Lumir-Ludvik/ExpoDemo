import { View, StyleSheet } from "react-native";

import PlaceholderImage from '@/assets/images/background-image.png';
import Button from "@/components/button/button";
import ImageViewer from "@/components/image-viewer/imageViewer";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" />
            <Button label="Use this photo" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});