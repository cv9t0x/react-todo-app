import { useContext } from 'react';

import StoreContext from 'contexts/StoreContext';

const useStore = () => {
	const store = useContext(StoreContext);
	if (store === undefined) {
		throw Error('useStore should be used in its provider');
	}

	return store;
};

export default useStore;
