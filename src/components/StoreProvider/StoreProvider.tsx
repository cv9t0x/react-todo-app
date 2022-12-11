import { type ReactNode } from 'react';

import StoreContext from 'contexts/StoreContext';
import RootStore from 'store/RootStore';

type StoreProviderProps = {
	children: ReactNode;
};

const rootStore = new RootStore();

const StoreProvider = ({ children }: StoreProviderProps) => {
	const store = rootStore ?? new RootStore();
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};

export default StoreProvider;
