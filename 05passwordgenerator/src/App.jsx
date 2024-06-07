import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const copiedPassRef = useRef(null);

  const copyPaswordToClipboard = useCallback(() => {
    copiedPassRef.current?.select();
    window.navigator.clipboard.writeText(Password).then(() => {
      alert(`Password ${Password} Copied to clipboard`);
    });
  }, [Password]);

  const passwordGenrator = useCallback(() => {
    let finalPass = "";
    let sourceStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) sourceStr += "0123456789";
    if (characterAllowed) sourceStr += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * sourceStr.length + 1);
      finalPass += sourceStr.charAt(char);
    }
    setPassword(finalPass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, characterAllowed, passwordGenrator]);

  return (
    <>
      <h1 className="flex text-center justify-center text-4xl text-white mb-5">
        Password Generator
      </h1>
      <div className="flex items-center justify-center w-full">
        <div className="bg-gray-500 p-8 rounded-md shadow-md">
          <div className="flex">
            <input
              type="text"
              className="outline-none p-2 border rounded w-full text-orange-500"
              placeholder="Password"
              readOnly
              value={Password}
              ref={copiedPassRef}
            />
            <button
              className="bg-blue-500 py-2 px-3 text-white rounded cursor-pointer"
              onClick={() => {
                copyPaswordToClipboard();
              }}
            >
              Copy
            </button>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <input
              type="range"
              className="flex-grow cursor-pointer"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span className="text-orange-500">Length: {length}</span>

            <label className="text-orange-500">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              Numbers
            </label>

            <label className="text-orange-500">
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
