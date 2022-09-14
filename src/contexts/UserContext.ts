import React from 'react';

import { User } from '../models';

export interface UserContextProps {
    user: User;
    setUser: (user: User) => void;
}

// TODO: Figure out how to supply a default value
export const UserContext = React.createContext<UserContextProps>(null as any);
