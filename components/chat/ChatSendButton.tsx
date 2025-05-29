import React from 'react';
import { Text, ViewStyle, TextStyle } from 'react-native';
import { Send, SendProps } from 'react-native-gifted-chat';
import { CustomMessage } from '../../types/chatTypes';

export function ChatSendButton(props: SendProps<CustomMessage>): React.JSX.Element {
    const containerStyle: ViewStyle = {
        borderTopWidth: 0,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B82F6',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginRight: 4,
        marginBottom: 4,
        minWidth: 70,
    };

    const textStyle: TextStyle = {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    };

    return (
        <Send {...props} containerStyle={containerStyle}>
            <Text style={textStyle}>发送</Text>
        </Send>
    );
} 