import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#FF0000');
  const [brushSize, setBrushSize] = useState<number>(10);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleBrushSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(parseInt(e.target.value));
  };

  return (
    <div className="p-4 bg-gray-100 min-w-[300px]">
      <h1 className="text-2xl font-bold mb-4">Enigma2.0</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Redaction Color
        </label>
        <input
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
          className="w-full h-10 rounded-md cursor-pointer"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brush Size: {brushSize}px
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={handleBrushSizeChange}
          className="w-full"
        />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
        Start Redaction
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));