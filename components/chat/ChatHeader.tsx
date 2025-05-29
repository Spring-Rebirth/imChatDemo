import React from 'react';
import { View, Text, Image } from 'react-native';

export function ChatHeader(): React.JSX.Element {
    return (
        <View className="bg-gradient-to-r from-blue-500 to-purple-600 pb-4 px-5 border-b border-gray-200 shadow-lg">
            <View className="flex-row items-center">
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=40&h=40&fit=crop&crop=face&auto=format',
                    }}
                    className="w-10 h-10 rounded-full mr-3 border-2 border-white/30"
                />
                <View className="flex-1">
                    <Text className="text-lg font-bold text-white">NativeWind Chat</Text>
                    <Text className="text-sm text-white/80 mt-0.5">
                        在线 • 使用 Tailwind CSS
                    </Text>
                </View>
            </View>
        </View>
    );
} 