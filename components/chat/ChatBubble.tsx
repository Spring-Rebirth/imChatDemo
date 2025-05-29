import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { Bubble, BubbleProps } from 'react-native-gifted-chat';
import { CustomMessage } from '../../types/chatTypes';

export function ChatBubble(props: BubbleProps<CustomMessage>): React.JSX.Element {
    const bubbleWrapperStyle: { right: ViewStyle; left: ViewStyle } = {
        right: {
            backgroundColor: '#3B82F6',
            marginRight: 12,
            marginVertical: 5,
            borderRadius: 20,
            borderBottomRightRadius: 5,
        },
        left: {
            backgroundColor: '#F3F4F6',
            marginLeft: 12,
            marginVertical: 5,
            borderRadius: 20,
            borderBottomLeftRadius: 5,
        },
    };

    const textStyle: { right: TextStyle; left: TextStyle } = {
        right: {
            color: '#FFFFFF',
            fontSize: 16,
            lineHeight: 22,
        },
        left: {
            color: '#1F2937',
            fontSize: 16,
            lineHeight: 22,
        },
    };

    return (
        <Bubble
            {...props}
            wrapperStyle={bubbleWrapperStyle}
            textStyle={textStyle}
        />
    );
} 