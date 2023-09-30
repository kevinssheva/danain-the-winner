const Complete = ({ amount }: { amount: string }) => {

  const amountWithoutDot = Number(amount.replace(/\./g, ''));

  function formatNumber(number: string) {
    // Convert the number to string
    const numberString = number;

    const [integerPart, decimalPart = ''] = numberString.split('.');

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;

    return formattedNumber;
  }

  return (
    <div className="w-full max-w-md z-20">
      <li className="list-decimal text-xl md:text-2xl font-bold font-montserrat my-3">
        Complete Investment
      </li>
      <div className="w-full p-3 md:p-5 border-2 border-white rounded-xl flex-col flex gap-3">
        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
          <p>Investment Amount</p>
          <p>Rp {formatNumber(String(amountWithoutDot))}</p>
        </div>
        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
          <p>Fee <span className="text-sm">(2.5%)</span></p>
          <p>Rp {formatNumber(String(Math.round(Number(amountWithoutDot) * (2.5 / 100))))}</p>
        </div>
        <div className="w-full border-b-2 border-white"></div>
        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
          <p>Total</p>
          <p>Rp {formatNumber(String(Number(amountWithoutDot) + (Number(amountWithoutDot) * (2.5 / 100))))}</p>
        </div>
      </div>
    </div>
  );
};

export default Complete;
