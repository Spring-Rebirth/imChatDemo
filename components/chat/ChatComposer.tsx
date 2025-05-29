import React from 'react';
import { TextStyle } from 'react-native';
import { Composer, ComposerProps } from 'react-native-gifted-chat';

export function ChatComposer(props: ComposerProps): React.JSX.Element {
    const textInputStyle: TextStyle = {
        backgroundColor: '#F9FAFB',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        lineHeight: 20,
        maxHeight: 120,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4,
    };

    return (
        <Composer
            {...props}
            textInputStyle={textInputStyle}
            placeholder="输入消息..."
            placeholderTextColor="#9CA3AF"
        />
    );
} 