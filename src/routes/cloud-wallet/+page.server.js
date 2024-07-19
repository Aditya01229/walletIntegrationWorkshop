import NeucronSDK from "neucron-sdk";

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();

        const email = data.get("email");
        const password = data.get("password");
        console.log(email, password);

        const neucron = new NeucronSDK();

        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;

        // const signUpResponse = await authModule.signUp({ email: "adityajasoriya2003@gmail.com", password: "Aditya@123" });
        // console.log(signUpResponse);

        const loginResponse = await authModule.login({ email, password });
        console.log(loginResponse);
        // const loginResponse = await authModule.login({ email: "sales@timechainlabs.io", password: "string" });
        // console.log(loginResponse);

        // const walletKeys = await walletModule.getWalletKeys({});
        // console.log(walletKeys);


        // For Default wallet balance
        const DefaultWalletBalance = await walletModule.getWalletBalance({});
        console.log(DefaultWalletBalance.data.balance);

        // const addresses = await walletModule.getAddressesByWalletId({});
        // console.log(addresses);

        // const walletHistory = await walletModule.getWalletHistory({ });
        // console.log(walletHistory);


        // console.log('initiating wallet')
        // const walletCreation1 = await walletModule.createWallet({ walletName: 'Wallet 1' });
        // console.log(walletCreation1);

        // const walletBalance = await walletModule.getWalletBalance({ walletId: "8401058c-6039-4972-b59a-8e1fba0aae2c" });
        // console.log(walletBalance);

        // const addresses = await walletModule.getAddressesByWalletId({ walletId: "8401058c-6039-4972-b59a-8e1fba0aae2c" });
        // console.log(addresses);

        // const mnemonic = await walletModule.getMnemonic({ walletId: walletCreation1.walletID });
        // console.log(mnemonic);

        // const allUtxos = await walletModule.getAllUtxos({ walletId: walletCreation1.walletID });
        // console.log(allUtxos);

        // const xPubKeys = await walletModule.getXPubKeys({ walletId: walletCreation1.walletID });
        // console.log(xPubKeys);
        return { success1: true, balance: DefaultWalletBalance };
    },

    payment: async ({ request }) => {
        const data = await request.formData();


        const neucron = new NeucronSDK();

        const authModule = neucron.authentication;
        const walletModule = neucron.wallet;

        const email = data.get("email");
        const password = data.get("password");

        console.log(data.get("paymail"), data.get("amount"));

        const loginResponse = await authModule.login({ email, password });
        console.log(loginResponse);

        const options = {
            outputs: [
                {
                    address: data.get("paymail"),
                    note: 'Nothing',
                    amount: Number(data.get("amount"))
                }
            ]
        };

        console.log(options);

        try{
            const payResponse = await neucron.pay.txSpend(options)
            console.log(payResponse)
            return { success2: true, payResponse };
        }catch (error) {
            console.error('Payment request failed:', error);
            return { success2: false};
        }

    }
};


