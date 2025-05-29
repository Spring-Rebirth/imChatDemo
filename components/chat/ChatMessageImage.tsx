import React from 'react';
import { ViewStyle, ImageStyle } from 'react-native';
import { MessageImage, MessageImageProps } from 'react-native-gifted-chat';
import { CustomMessage } from '../../types/chatTypes';

export function ChatMessageImage(props: MessageImageProps<CustomMessage>): React.JSX.Element {
    const containerStyle: ViewStyle = {
        padding: 0,
    };

    const imageStyle: ImageStyle = {
        width: 200,
        height: 150,
        borderRadius: 15,
        margin: 3,
    };

    return (
        <MessageImage
            {...props}
            containerStyle={containerStyle}
            imageStyle={imageStyle}
        />
    );
} 