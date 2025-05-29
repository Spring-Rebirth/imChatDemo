import { IMessage, User } from 'react-native-gifted-chat';

export interface CustomMessage extends IMessage {
    system?: boolean;
    image?: string;
}

export interface CustomUser extends User {
    name: string;
    avatar: string;
} 