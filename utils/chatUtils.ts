import { Alert } from 'react-native';
import { AI_RESPONSES, AI_USER, DEFAULT_USER } from '../constants/chatConstants';
import { CustomMessage } from '../types/chatTypes';

export const generateRandomId = (): number => {
    return Math.round(Math.random() * 1000000);
};

export const createEmojiMessage = (emoji: string): CustomMessage => {
    return {
        _id: generateRandomId(),
        text: emoji,
        createdAt: new Date(),
        user: DEFAULT_USER,
    };
};

export const createAIResponse = (): CustomMessage => {
    const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];

    return {
        _id: generateRandomId(),
        text: randomResponse,
        createdAt: new Date(),
        user: AI_USER,
    };
};

export const showMessageOptions = (message: CustomMessage): void => {
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