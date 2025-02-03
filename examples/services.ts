import { createWallet, getBalance, configureTNS } from "../src/index";

///note to run: `npm install -g ts-node typescript` then  ts-node services.ts

async function main() {

    /// Create a new wallet
  const address = await createWallet({
    username: "testUsername",
    password: "newToroneggtWallet",
  });


  console.log("Toronet address: ", address);

  /// Get the balances of the wallet
  // const balances = await getBalance({address: address});
  // console.log(balances);

  // // create a TNS(Toronet naming service)
  // await configureTNS({
  //   address: address,
  //   password: "password",
  //   username: "username",
  // });

}

main();