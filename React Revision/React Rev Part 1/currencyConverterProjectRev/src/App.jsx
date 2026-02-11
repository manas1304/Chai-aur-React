import InputBox from './components/InputBox'
import {useState} from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';

export default function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from); // Array of all the currencies is contained in currencyInfo

  const options = Object.keys(currencyInfo); // Extracting all the keys
  console.log(options)

  function swap(){
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert(){
    setConvertedAmount(amount * currencyInfo[to]); // to -- here is also a currency chosen by the user 
  }


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('data:image/jpeg;base64,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')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert(); // call the convert function as soon as the user click on the submit button
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }