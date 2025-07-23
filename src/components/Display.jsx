function Display({ expression, current }) {
  return (
    <div className="bg-black text-white p-4 text-right rounded mb-4">
      <div className="text-xs text-gray-400">{expression}</div>
      <div id="display" className="text-3xl">
        {current}
      </div>
    </div>
  );
}

export default Display;
