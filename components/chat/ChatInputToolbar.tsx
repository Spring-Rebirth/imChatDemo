import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { InputToolbar, InputToolbarProps } from 'react-native-gifted-chat';
import { CustomMessage } from '../../types/chatTypes';
import { EMOJIS } from '../../constants/chatConstants';

interface ChatInputToolbarProps extends InputToolbarProps<CustomMessage> {
    showEmojiPicker: boolean;
    onEmojiPress: (emoji: string) => void;
}

export function ChatInputToolbar(props: ChatInputToolbarProps): React.JSX.Element {
    const { showEmojiPicker, onEmojiPress, ...inputToolbarProps } = props;

    const containerStyle: ViewStyle = {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingHorizontal: 12,
        paddingVertical: 8,
        minHeight: 64,
    };

    const primaryStyle: ViewStyle = {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
    };

    return (
        <View>
            {showEmojiPicker && (
                <View className="flex-row flex-wrap bg-white border-t border-gray-200 px-2 py-2">
                    {EMOJIS.map((emoji: string, index: number) => (
                        <TouchableOpacity
                            key={index}
                            className="w-12 h-10 items-center justify-center m-1 bg-gray-100 rounded-xl"
                            onPress={() => onEmojiPress(emoji)}
                        >
                            <Text className="text-2xl">{emoji}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            <InputToolbar
                {...inputToolbarProps}
                containerStyle={containerStyle}
                primaryStyle={primaryStyle}
            />
        </View>
    );
} 