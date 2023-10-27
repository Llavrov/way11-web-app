import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import { useEffect, useRef, useState, type ReactElement } from 'react';

const style = {
    position: 'absolute',
    top: 'calc(50% - 45vh)',
    left: 'calc(50% - 45vw)',
    width: '90vw',
    height: '90vh',
    boxSizing: 'border-box',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 4,
};

export interface WAModalProps {
    openMenu: boolean;
    handleOpenMenu: (value: boolean) => void;
}

export default function WAModal({ openMenu, handleOpenMenu, children }: React.PropsWithChildren<WAModalProps>): ReactElement {
    const [open, setOpen] = useState(openMenu);
    const containerRef = useRef(null);

    const handleClose = (): void => {
        setOpen(false);
        handleOpenMenu(false);
    };

    useEffect((): void => {
        setOpen(openMenu);
    }, [openMenu]);

    return (
        <div className="max-h-screen overflow-hidden">
            <Modal
                ref={containerRef}
                open={open}
                onClose={handleClose}
                sx={{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    '& .MuiModal-backdrop': {
                        width: '100vw',
                        height: '100vh',
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Slide
                    container={containerRef.current}
                    direction="up"
                    in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
}
