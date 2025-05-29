import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface ChatActionsProps {
    onToggleEmojiPicker: () => void;
}

export function ChatActions({ onToggleEmojiPicker }: ChatActionsProps): React.JSX.Element {
    const buttonStyle: ViewStyle = {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 1,
        backgroundColor: '#F3F4F6',
        borderRadius: 22,
    };

    const textStyle: TextStyle = {
        fontSize: 20,
    };

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onToggleEmojiPicker}
        >
            <Text style={textStyle}>😊</Text>
        </TouchableOpacity>
    );
} 