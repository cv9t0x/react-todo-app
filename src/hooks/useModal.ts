import { useCallback, useState } from 'react';

interface UseModalProps {
	onClose?: () => void;
}

const useModal = ({ onClose }: UseModalProps = {}) => {
	const [open, setOpen] = useState(false);

	const handleOpen = useCallback(() => {
		setOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
		onClose?.();
	}, []);

	return { open, handleOpen, handleClose };
};

export default useModal;
