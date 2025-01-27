export default function More() {
  return (
    <>
    <div class="w-full flex-col h-screen justify-center flex">
        <div class="flex sm:flex-row flex-col top-0  sm:justify-center justify-start h-[80%] w-screen sm:w-[100%] gap-[1%] rounded-xl px-0 sm:px-[1rem] bg-blur">
            <div class="w-full">
            <h1 className="flex col-start-1 text-[2rem] underline text-center font-bold flex-col">How to buy/ DEXes </h1>
            <div class="mt-8 text-[1.5rem]">
            <h1 class="text-[1.4rem] text-center">You'll need a browser wallet, like <a class="text-indigo-900" target="_blank" href="https://metamask.io/">Metamask</a> or <a class="text-indigo-900" target="_blank" href="https://rabby.io/">Rabby</a>.</h1>
            <h1 class="text-[1.4rem] text-center"></h1>
            <ul class="ml-2 mt-7 sm:scale-100 scale-75">
                <li>Ethereum ={'>'} <a class="text-indigo-900" target="_blank" href="https://app.uniswap.org/swap?chain=mainnet&inputCurrency=ETH&outputCurrency=0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe">Uniswap</a><h1 class="text-[1.1rem] underline">trading pair: 0xb7a71c2e31920019962cb62aeea1dbf502905b81</h1></li> 
                <li>Avalanche ={'>'} <a class="text-indigo-900" target="_blank" href="https://kyberswap.com/swap/avalanche?outputCurrency=0x3419875B4D3Bca7F3FddA2dB7a476A79fD31B4fE&inputCurrency=ETH">KyberSwap</a><h1 class="text-[1.1rem] underline">trading pair: 0xd1bfb54595ed5346f4fc87eb3813b7793c5a7ead</h1></li>
                <li>Arbitrum ={'>'} <a class="text-indigo-900" target="_blank" href="https://app.uniswap.org/swap?chain=arbitrum&inputCurrency=ETH&outputCurrency=0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe">Uniswap</a><h1 class="text-[1.1rem] underline">trading pair: 0x05c5bdbc7b3c64109ddcce058ce99f4515fe1c83</h1></li>
                <li>BNB ={'>'} <a class="text-indigo-900" target="_blank" href="https://pancakeswap.finance/swap?chain=bnb&inputCurrency=ETH&outputCurrency=0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe">PancakeSwap</a><h1 class="text-[1.1rem] underline">trading pair: 0x642089a5da2512db761d325a868882ece6e387f5</h1></li>
                <li>BASE ={'>'} <a class="text-indigo-900" target="_blank" href="https://app.uniswap.org/#/swap?chain=base&inputCurrency=ETH&outputCurrency=0x3419875b4d3bca7f3fdda2db7a476a79fd31b4fe">Uniswap</a><h1 class="text-[1.1rem] underline">trading pair: 0xb64dff20dd5c47e6dbb56ead80d23568006dec1e</h1></li>
            </ul>
            </div>
            </div>
            <div class="h-full border-4 border-[#DED5C6]"></div>
            <div class="w-full ">
            <h1 class="flex col-end-1 sm:text-[2rem] text-[1rem] underline text-center font-bold flex-col">█████████████████████████</h1> 
            <div class="mt-8  max-h-[90%] overflow-y-scroll">
            <ul className="sm:visible invisible">
                <li>Coming soon..</li>
            </ul>
            </div>  
            </div>
            </div>
            <div className="w-full h-full absolute z-[-10]">
        <img className="absolute bottom-2 right-4 w-[5%]" src="/dzhv-art.jpg" alt="dizzyhavoc eye"></img>
        <img className="absolute bottom-2 left-4 blur-sm w-[25%]" src="/dzhv.png" alt="dizzyhavoc eye"></img>
      </div>
    </div>
    </>
  );
}