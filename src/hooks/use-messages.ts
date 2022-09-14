import { useQuery } from '@tanstack/react-query'
import { getMessagesRequest } from '../api';

export function useMessages() {
    return useQuery(['getMessages'], getMessagesRequest, {
        refetchInterval: 1000,
    });
}
