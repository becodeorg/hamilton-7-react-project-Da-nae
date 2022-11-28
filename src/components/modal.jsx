const Modal = ({setIsShowing, isShowing}) => {

    return (
        <div className="modal-bg fixed flex pt-20 justify-center top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-10 bg-neutral-700/50">
            <div className="modalContainer bg-pine border-none shadow-lg flex flex-col justify-around relative w-64 h-48 pointer-events-auto bg-clip-padding rounded-md outline-none text-center">
                <span className="absolute animate-ping w-5 h-5 bg-dark-salmon rounded-full -top-1 -left-1"></span>
                <span className="absolute w-5 h-5 bg-dark-salmon rounded-full -top-1 -left-1"></span>
                <div className="modal-title text-bisque text-lg">
                    <h4>Take a break !</h4>
                </div>
                <div className="modal-body text-bisque px-6">
                    You worked well, now it's time to touch some grass 🌱
                </div>
                <div className="flex justify-around">
                    <button
                        type="button"
                        className="modalbtn modal-close-button bg-dark-salmon"
                        onClick={() => setIsShowing(false)}>
                        Close
                    </button>
                    <button
                        type="button"
                        className="modalbtn modal-newtimer-button bg-bisque"
                        // onClick={startAgain}
                    >
                        Start a new work timer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;