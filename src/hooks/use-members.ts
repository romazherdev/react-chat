import { useQuery } from '@tanstack/react-query'
import { getMembersRequest } from '../api';

export function useMembers() {
    return useQuery(['getMembers'], getMembersRequest, {
        refetchInterval: 1000,
    });
}
