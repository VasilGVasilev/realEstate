

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                {/* Add your modal content here */}
                <p>This is a modal box.</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal
