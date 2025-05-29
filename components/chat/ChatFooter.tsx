import React from 'react';
import { View, Text } from 'react-native';

interface ChatFooterProps {
    isTyping: boolean;
}

export function ChatFooter({ isTyping }: ChatFooterProps): React.JSX.Element | null {
    if (isTyping) {
        return (
            <View className="flex-row items-center px-5 py-2 bg-gray-50">
                <Text className="text-gray-600 text-sm mr-2">NativeWind AI 正在输入...</Text>
                <View className="flex-row">
                    <View className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-0.5 opacity-40" />
                    <View className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-0.5 opacity-40" />
                    <View className="w-1.5 h-1.5 rounded-full bg-gray-600 mx-0.5 opacity-40" />
                </View>
            </View>
        );
    }
    return null;
} 