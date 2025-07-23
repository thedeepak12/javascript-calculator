function Button({ label, id, handleClick, className = '', type }) {
  const getBaseStyle = () => {
    switch (type) {
      case 'control':
        return 'bg-[#ac3939]';
      case 'equals':
        return 'bg-[#004466]';
      case 'operator':
        return 'bg-[#666666]';
      default:
        return 'bg-[#4d4d4d]';
    }
  };

  return (
    <button
      id={id}
      onClick={() => handleClick(label)}
      className={`bg-[#4d4d4d] text-white text-xl p-4 border-2 border-black ${getBaseStyle()} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
