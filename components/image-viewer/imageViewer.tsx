import { Image, type ImageSource } from 'expo-image';
import {ImageViewerStyles} from "@/components/image-viewer/imageViewer.styles";

type Props = {
    imgSource: ImageSource;
};

 const ImageViewer = ({ imgSource }: Props) => {
    return <Image source={imgSource} style={ImageViewerStyles.image} />;
}

export default ImageViewer

