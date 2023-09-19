const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }
  return (
    <>
      {alert?.active && (
        <div x-data className={`w-full p-5 mb-8 ${alert.type === 'error' ? 'bg-red-600' : 'bg-green-600'} rounded`}>
          <div className="flex space-x-3">
            <div className="flex-1 font-bold leading-tight text-white text">{alert.message}</div>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" onClick={handleClose}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
