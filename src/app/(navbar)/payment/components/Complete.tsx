const Complete = () => {
  return (
    <div className="w-full max-w-md z-20">
      <li className="list-decimal text-xl md:text-2xl font-bold font-montserrat my-3">
        Complete Investment
      </li>
      <div className="w-full p-3 md:p-5 border-2 border-white rounded-xl flex-col flex gap-3">
        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
          <p>Investment Amount</p>
          <p>$100</p>
        </div>
        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
          <p>Fee</p>
          <p>$10</p>
        </div>
        <div className="w-full border-b-2 border-white"></div>
        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
          <p>Total</p>
          <p>$110</p>
        </div>
      </div>
    </div>
  );
};

export default Complete;
