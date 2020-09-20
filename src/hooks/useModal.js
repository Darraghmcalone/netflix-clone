import { useState } from 'react'

const useModal = () => {
    const [open, setOpen] = useState(false);

    return {
        open,
        handleOpen: () => setOpen(true),
        handleClose: () => setOpen(false),
    }
}
export default useModal
