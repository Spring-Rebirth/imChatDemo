import React, { useState, useCallback, useEffect } from 'react';
import { View, Platform, ViewStyle } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Types
import { CustomMessage, CustomUser } from '../types/chatTypes';

// Constants
import { INITIAL_MESSAGES, DEFAULT_USER } from '../constants/chatConstants';

// Components
import {
    ChatBubble,
    ChatSendButton,
    ChatSystemMessage,
    ChatAvatar,
    ChatInputToolbar,
    ChatComposer,
    ChatActions,
    ChatMessageImage,
    ChatFooter,
    ChatHeader,
} from '../components/chat';

// Utils
import { createEmojiMessage, createAIResponse, showMessageOptions } from '../utils/chatUtils';

export function Example(): React.JSX.Element {
    const [messages, setMessages] = useState<CustomMessage[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        setMessages(INITIAL_MESSAGES);
    }, []);

    const onSend = useCallback((newMessages: CustomMessage[] = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );

        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const aiResponse = createAIResponse();
            setMessages((prev) => GiftedChat.append(prev, [aiResponse]));
        }, 1500 + Math.random() * 1000);
    }, []);

    const handleEmojiPress = useCallback((emoji: string) => {
        const emojiMessage = createEmojiMessage(emoji);
        onSend([emojiMessage]);
        setShowEmojiPicker(false);
    }, [onSend]);

    const handleToggleEmojiPicker = useCallback(() => {
        setShowEmojiPicker(!showEmojiPicker);
    }, [showEmojiPicker]);

    const handleLongPress = useCallback((_context: unknown, message: CustomMessage) => {
        showMessageOptions(message);
    }, []);

    const currentUser: CustomUser = DEFAULT_USER;

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
            <ChatHeader />

            <GiftedChat
                messages={messages}
                onSend={onSend}
                user={currentUser}
                renderBubble={ChatBubble}
                renderSend={ChatSendButton}
                renderSystemMessage={ChatSystemMessage}
                renderAvatar={ChatAvatar}
                renderInputToolbar={(props) => (
                    <ChatInputToolbar
                        {...props}
                        showEmojiPicker={showEmojiPicker}
                        onEmojiPress={handleEmojiPress}
                    />
                )}
                renderComposer={ChatComposer}
                renderActions={() => (
                    <ChatActions onToggleEmojiPicker={handleToggleEmojiPicker} />
                )}
                renderMessageImage={ChatMessageImage}
                renderFooter={() => <ChatFooter isTyping={isTyping} />}
                onLongPress={handleLongPress}
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
