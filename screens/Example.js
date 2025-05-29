import React, { useState, useCallback, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    Alert,
    Image,
    Dimensions
} from 'react-native'
import {
    GiftedChat,
    Bubble,
    Send,
    SystemMessage,
    Avatar,
    InputToolbar,
    Composer,
    MessageText,
    Time,
    Actions,
    MessageImage
} from 'react-native-gifted-chat'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

export function Example() {
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const insets = useSafeAreaInsets()
    const emojis = ['😀', '😂', '🥰', '😍', '🤔', '👍', '❤️', '🎉', '😊', '👋', '🔥', '💯']

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
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )

        setIsTyping(true)

        setTimeout(() => {
            setIsTyping(false)
            const responses = [
                '太棒了！NativeWind 让样式变得更简单 🎨',
                '使用 Tailwind 类名真的很方便！🚀',
                '响应式设计从未如此简单 📱',
                '开发效率大大提升！⚡',
                '这就是现代化的 React Native 开发 💪',
            ]

            const randomResponse = responses[Math.floor(Math.random() * responses.length)]

            const aiResponse = {
                _id: Math.round(Math.random() * 1000000),
                text: randomResponse,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'NativeWind AI',
                    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=140&h=140&fit=crop&crop=face&auto=format',
                },
            }
            setMessages(prev => GiftedChat.append(prev, [aiResponse]))
        }, 1500 + Math.random() * 1000)
    }, [])

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#3B82F6', // bg-blue-500
                        marginRight: 12,
                        marginVertical: 5,
                        borderRadius: 20,
                        borderBottomRightRadius: 5,
                    },
                    left: {
                        backgroundColor: '#F3F4F6', // bg-gray-100
                        marginLeft: 12,
                        marginVertical: 5,
                        borderRadius: 20,
                        borderBottomLeftRadius: 5,
                    },
                }}
                textStyle={{
                    right: {
                        color: '#FFFFFF',
                        fontSize: 16,
                        lineHeight: 22,
                    },
                    left: {
                        color: '#1F2937', // text-gray-800
                        fontSize: 16,
                        lineHeight: 22,
                    },
                }}
                timeTextStyle={{
                    right: {
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 12,
                    },
                    left: {
                        color: 'rgba(0,0,0,0.5)',
                        fontSize: 12,
                    },
                }}
            />
        )
    }

    const renderSend = (props) => {
        return (
            <Send
                {...props}
                containerStyle={{
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
                }}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontWeight: '600',
                    fontSize: 16,
                }}>发送</Text>
            </Send>
        )
    }

    const renderSystemMessage = (props) => {
        return (
            <SystemMessage
                {...props}
                containerStyle={{
                    marginVertical: 15,
                }}
                wrapperStyle={{
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', // bg-blue-500/10
                    borderRadius: 20,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderColor: 'rgba(59, 130, 246, 0.2)', // border-blue-500/20
                }}
                textStyle={{
                    color: '#3B82F6', // text-blue-500
                    fontSize: 14,
                    fontWeight: '500',
                    textAlign: 'center',
                }}
            />
        )
    }

    const renderAvatar = (props) => {
        return (
            <Avatar
                {...props}
                containerStyle={{
                    left: {
                        marginRight: 8,
                        marginBottom: 0,
                    },
                    right: {},
                }}
                imageStyle={{
                    left: {
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        borderWidth: 2,
                        borderColor: '#E5E7EB', // border-gray-200
                    },
                    right: {},
                }}
            />
        )
    }

    const renderInputToolbar = (props) => {
        return (
            <View>
                {showEmojiPicker && (
                    <View className="flex-row flex-wrap bg-white border-t border-gray-200 px-2 py-2">
                        {emojis.map((emoji, index) => (
                            <TouchableOpacity
                                key={index}
                                className="w-12 h-10 items-center justify-center m-1 bg-gray-100 rounded-xl"
                                onPress={() => {
                                    props.onSend([{
                                        _id: Math.round(Math.random() * 1000000),
                                        text: emoji,
                                        createdAt: new Date(),
                                        user: props.user,
                                    }])
                                    setShowEmojiPicker(false)
                                }}
                            >
                                <Text className="text-2xl">{emoji}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <InputToolbar
                    {...props}
                    containerStyle={{
                        backgroundColor: '#FFFFFF',
                        borderTopWidth: 1,
                        borderTopColor: '#E5E7EB', // border-gray-200
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        minHeight: 64,
                    }}
                    primaryStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 4,
                    }}
                />
            </View>
        )
    }

    const renderComposer = (props) => {
        return (
            <Composer
                {...props}
                textInputStyle={{
                    backgroundColor: '#F9FAFB', // bg-gray-50
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: '#E5E7EB', // border-gray-200
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    fontSize: 16,
                    lineHeight: 20,
                    maxHeight: 120,
                    marginLeft: 4,
                    marginRight: 4,
                    marginTop: 4,
                    marginBottom: 4,
                }}
                placeholder="输入消息..."
                placeholderTextColor="#9CA3AF" // text-gray-400
            />
        )
    }

    const renderActions = (props) => {
        return (
            <Actions
                {...props}
                containerStyle={{
                    width: 44,
                    height: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 2,
                    marginRight: 2,
                    marginBottom: 1,
                }}
                onPressActionButton={() => setShowEmojiPicker(!showEmojiPicker)}
                icon={() => (
                    <View className="bg-gray-100 hover:bg-gray-200 rounded-full w-11 h-11 items-center justify-center">
                        <Text className="text-xl">😊</Text>
                    </View>
                )}
            />
        )
    }

    const renderMessageImage = (props) => {
        return (
            <MessageImage
                {...props}
                containerStyle={{
                    padding: 0,
                }}
                imageStyle={{
                    width: 200,
                    height: 150,
                    borderRadius: 15,
                    margin: 3,
                }}
            />
        )
    }

    const onLongPress = (context, message) => {
        Alert.alert(
            '消息选项',
            '选择您要执行的操作',
            [
                { text: '复制', onPress: () => console.log('复制消息:', message.text) },
                { text: '回复', onPress: () => console.log('回复消息') },
                { text: '转发', onPress: () => console.log('转发消息') },
                { text: '删除', onPress: () => console.log('删除消息'), style: 'destructive' },
                { text: '取消', style: 'cancel' },
            ]
        )
    }

    const renderFooter = () => {
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
            )
        }
        return null
    }

    return (
        <View className="flex-1 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            {/* Header with NativeWind classes */}
            <View className="bg-gradient-to-r from-blue-500 to-purple-600 pb-4 px-5 border-b border-gray-200 shadow-lg">
                <View className="flex-row items-center">
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=40&h=40&fit=crop&crop=face&auto=format' }}
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
                user={{
                    _id: 1,
                    name: '用户',
                    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=140&h=140&fit=crop&crop=face&auto=format',
                }}
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
                scrollToBottomStyle={{
                    backgroundColor: '#3B82F6', // bg-blue-500
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
                }}
                maxInputLength={500}
                keyboardShouldPersistTaps="never"
                showUserAvatar
                showAvatarForEveryMessage={false}
                renderAvatarOnTop
                inverted={Platform.OS !== 'web'}
                isTyping={isTyping}
            />
        </View>
    )
} 