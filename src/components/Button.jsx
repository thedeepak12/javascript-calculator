function Button({ label, id, handleClick, className = '' }) {
  return (
    <button
      id={id}
      onClick={() => handleClick(label)}
      className={`bg-[#4d4d4d] text-white text-xl p-4 border-2 border-black ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
