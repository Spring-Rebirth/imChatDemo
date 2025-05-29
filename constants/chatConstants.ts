export const EMOJIS: string[] = [
    '😀', '😂', '🥰', '😍', '🤔', '👍', '❤️', '🎉', '😊', '👋', '🔥', '💯'
];

export const AI_RESPONSES: string[] = [
    '太棒了！NativeWind 让样式变得更简单 🎨',
    '使用 Tailwind 类名真的很方便！🚀',
    '响应式设计从未如此简单 📱',
    '开发效率大大提升！⚡',
    '这就是现代化的 React Native 开发 💪',
];

export const INITIAL_MESSAGES = [
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
        user: {} as any, // System messages require user property
    },
];

export const DEFAULT_USER = {
    _id: 1,
    name: '用户',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=140&h=140&fit=crop&crop=face&auto=format',
};

export const AI_USER = {
    _id: 2,
    name: 'NativeWind AI',
    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=140&h=140&fit=crop&crop=face&auto=format',
}; 