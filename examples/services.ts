import { createWallet, getBalance, configureTNS } from "../src/index";

///note to run: `npm install -g ts-node typescript` then  ts-node services.ts

async function main() {

    /// Create a new wallet
  // const address = await createWallet({
  //   password: "newToroneggtWallet",
  // });

  const address = "0x46bbe1dab243c3c889e491b92fe0337b57deba97"

  console.log("Toronet address: ", address);

  /// Get the balances of the wallet
  const balances = await getBalance({address: address});
  console.log(balances);

  // // create a TNS(Toronet naming service)
  // await configureTNS({
  //   address: address,
  //   password: "password",
  //   username: "username",
  // });

}

main();