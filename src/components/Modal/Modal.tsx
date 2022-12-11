import { type ReactNode } from 'react';

import { Close as CloseIcon } from '@mui/icons-material';
import {
	Modal as MuiModal,
	Card,
	CardContent,
	CardHeader,
	Divider,
	IconButton,
} from '@mui/material';

import { ModalContainer } from './Modal.styled';

interface ModalProps {
	title: string;
	open: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ title, open, onClose, children }: ModalProps) => {
	return (
		<MuiModal open={open}>
			<ModalContainer>
				<Card>
					<CardHeader
						title={title}
						action={
							<IconButton onClick={onClose}>
								<CloseIcon fontSize='medium' />
							</IconButton>
						}
					/>
					<Divider />
					<CardContent>{children}</CardContent>
				</Card>
			</ModalContainer>
		</MuiModal>
	);
};

export default Modal;
