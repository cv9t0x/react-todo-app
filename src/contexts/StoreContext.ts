import { createContext } from 'react';

import type RootStore from 'store/RootStore';

const StoreContext = createContext<RootStore | undefined>(undefined);

export default StoreContext;
