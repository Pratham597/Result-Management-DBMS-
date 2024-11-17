import React from "react";
const Card = ({
  title,
  src,
  actionText,
  actionSecondText,
  onAction,
  onSecondAction,
}) => {
  console.log(src)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 p-6 mb-4">
      <div className="font-bold text-lg mb-2 text-white">{title}</div>
      <img
      loading="lazy"
        className="text-gray-700 text-base mb-4 w-[300px] h-[200px]"
        src={src}
      />
      <div className="flex justify-between">
        <button
          onClick={onAction}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded"
        >
          {actionText}
        </button>
        {actionSecondText && (
          <button
            onClick={onSecondAction}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded"
          >
            {actionSecondText}
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
