import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { SystemMessage, SystemMessageProps } from 'react-native-gifted-chat';
import { CustomMessage } from '../../types/chatTypes';

export function ChatSystemMessage(props: SystemMessageProps<CustomMessage>): React.JSX.Element {
    const containerStyle: ViewStyle = {
        marginVertical: 15,
    };

    const wrapperStyle: ViewStyle = {
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'rgba(59, 130, 246, 0.2)',
    };

    const textStyle: TextStyle = {
        color: '#3B82F6',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    };

    return (
        <SystemMessage
            {...props}
            containerStyle={containerStyle}
            wrapperStyle={wrapperStyle}
            textStyle={textStyle}
        />
    );
} 