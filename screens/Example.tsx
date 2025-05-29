import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    Alert,
    Image,
    ViewStyle,
    TextStyle,
    ImageStyle,
} from 'react-native';
import {
    GiftedChat,
    Bubble,
    Send,
    SystemMessage,
    Avatar,
    InputToolbar,
    Composer,
    MessageImage,
    IMessage,
    User,
    BubbleProps,
    SendProps,
    SystemMessageProps,
    AvatarProps,
    InputToolbarProps,
    ComposerProps,
    MessageImageProps,
} from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomMessage extends IMessage {
    system?: boolean;
    image?: string;
}

interface CustomUser extends User {
    name: string;
    avatar: string;
}

const EMOJIS: string[] = ['😀', '😂', '🥰', '😍', '🤔', '👍', '❤️', '🎉', '😊', '👋', '🔥', '💯'];

const AI_RESPONSES: string[] = [
    '太棒了！NativeWind 让样式变得更简单 🎨',
    '使用 Tailwind 类名真的很方便！🚀',
    '响应式设计从未如此简单 📱',
    '开发效率大大提升！⚡',
    '这就是现代化的 React Native 开发 💪',
];

export function Example(): React.JSX.Element {
    const [messages, setMessages] = useState<CustomMessage[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        setMessages([
            {
                _id: Math.round(Math.random() * 1000000),
                text: '🎉 欢迎使用 NativeWind 聊天界面！\n\n这个界面完全使用 Tailwind CSS 类名构建：\n• 响应式设计\n• 现代化外观\n• 高度可定制\n• 开发效率提升',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'NativeWind AI',
                    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=140&h=140&fit=crop&crop=face&auto=format',
                },
            },
            {
                _id: Math.round(Math.random() * 1000000),
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format',
                text: '✨ 图片消息也支持！',
                createdAt: new Date(Date.now() - 5000),
                user: {
                    _id: 2,
                    name: 'NativeWind AI',
                    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=140&h=140&fit=crop&crop=face&auto=format',
                },
            },
            {
                _id: Math.round(Math.random() * 1000000),
                text: '系统消息：NativeWind 聊天室已连接 🚀',
                createdAt: new Date(Date.now() - 10000),
                system: true,
                user: {} as User, // System messages require user property
            },
        ]);
    }, []);

    const onSend = useCallback((newMessages: CustomMessage[] = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );

        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];

            const aiResponse: CustomMessage = {
                _id: Math.round(Math.random() * 1000000),
                text: randomResponse,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'NativeWind AI',
                    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=140&h=140&fit=crop&crop=face&auto=format',
                },
            };
            setMessages((prev) => GiftedChat.append(prev, [aiResponse]));
        }, 1500 + Math.random() * 1000);
    }, []);

    const renderBubble = (props: BubbleProps<CustomMessage>): React.JSX.Element => {
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
    };

    const renderSend = (props: SendProps<CustomMessage>): React.JSX.Element => {
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
    };

    const renderSystemMessage = (props: SystemMessageProps<CustomMessage>): React.JSX.Element => {
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
    };

    const renderAvatar = (props: AvatarProps<CustomMessage>): React.JSX.Element => {
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
    };

    const sendEmojiMessage = (emoji: string): void => {
        const emojiMessage: CustomMessage = {
            _id: Math.round(Math.random() * 1000000),
            text: emoji,
            createdAt: new Date(),
            user: {
                _id: 1,
                name: '用户',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=140&h=140&fit=crop&crop=face&auto=format',
            },
        };
        onSend([emojiMessage]);
        setShowEmojiPicker(false);
    };

    const renderInputToolbar = (props: InputToolbarProps<CustomMessage>): React.JSX.Element => {
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
                        {EMOJIS.map((emoji, index) => (
                            <TouchableOpacity
                                key={index}
                                className="w-12 h-10 items-center justify-center m-1 bg-gray-100 rounded-xl"
                                onPress={() => sendEmojiMessage(emoji)}
                            >
                                <Text className="text-2xl">{emoji}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <InputToolbar
                    {...props}
                    containerStyle={containerStyle}
                    primaryStyle={primaryStyle}
                />
            </View>
        );
    };

    const renderComposer = (props: ComposerProps): React.JSX.Element => {
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
    };

    const renderActions = (): React.JSX.Element => {
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
                onPress={() => setShowEmojiPicker(!showEmojiPicker)}
            >
                <Text style={textStyle}>😊</Text>
            </TouchableOpacity>
        );
    };

    const renderMessageImage = (props: MessageImageProps<CustomMessage>): React.JSX.Element => {
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
    };

    const onLongPress = (_context: unknown, message: CustomMessage): void => {
        Alert.alert(
            '消息选项',
            '选择您要执行的操作',
            [
                {
                    text: '复制',
                    onPress: () => console.log('复制消息:', message.text),
                },
                {
                    text: '回复',
                    onPress: () => console.log('回复消息'),
                },
                {
                    text: '转发',
                    onPress: () => console.log('转发消息'),
                },
                {
                    text: '删除',
                    onPress: () => console.log('删除消息'),
                    style: 'destructive',
                },
                {
                    text: '取消',
                    style: 'cancel',
                },
            ]
        );
    };

    const renderFooter = (): React.JSX.Element | null => {
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
    };

    const currentUser: CustomUser = {
        _id: 1,
        name: '用户',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=140&h=140&fit=crop&crop=face&auto=format',
    };

    const containerStyle: ViewStyle = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
    };

    const scrollToBottomStyle: ViewStyle = {
        backgroundColor: '#3B82F6',
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    };

    return (
        <View className="flex-1 bg-white" style={containerStyle}>
            {/* Header with NativeWind classes */}
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

            <GiftedChat
                messages={messages}
                onSend={onSend}
                user={currentUser}
                renderBubble={renderBubble}
                renderSend={renderSend}
                renderSystemMessage={renderSystemMessage}
                renderAvatar={renderAvatar}
                renderInputToolbar={renderInputToolbar}
                renderComposer={renderComposer}
                renderActions={renderActions}
                renderMessageImage={renderMessageImage}
                renderFooter={renderFooter}
                onLongPress={onLongPress}
                alwaysShowSend
                scrollToBottom
                scrollToBottomStyle={scrollToBottomStyle}
                maxInputLength={500}
                keyboardShouldPersistTaps="never"
                showUserAvatar
                showAvatarForEveryMessage={false}
                renderAvatarOnTop
                inverted={Platform.OS !== 'web'}
                isTyping={isTyping}
            />
        </View>
    );
}
