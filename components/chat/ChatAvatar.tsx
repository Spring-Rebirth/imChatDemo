import React from 'react';
import { Avatar, AvatarProps } from 'react-native-gifted-chat';
import { CustomMessage } from '../../types/chatTypes';

export function ChatAvatar(props: AvatarProps<CustomMessage>): React.JSX.Element {
    const containerStyle = {
        left: {
            marginRight: 8,
            marginBottom: 0,
        },
        right: {},
    };

    const imageStyle = {
        left: {
            width: 36,
            height: 36,
            borderRadius: 18,
            borderWidth: 2,
            borderColor: '#E5E7EB',
        },
        right: {},
    };

    return (
        <Avatar
            {...props}
            containerStyle={containerStyle}
            imageStyle={imageStyle}
        />
    );
} 