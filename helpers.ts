import { readFileSync } from "fs";

function mnemonic({ defaultNetwork }: { defaultNetwork: string }) {
  try {
    return readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    if (defaultNetwork !== "hardhat") {
      console.log(
        "☢️ WARNING: No mnemonic file created for a deploy account. Try create mnemonic.txt in root repo."
      );
    }
  }
  return "";
}

export { mnemonic };
