<script>
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <h1 class="font-bold mb-4 uppercase">Check Balance</h1>
  <form method="POST" action="?/login">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3"
          for="grid-city"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3"
          for="password"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="password"
          type="text"
          placeholder="Enter password"
          name="password"
        />
      </div>

      <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3" for="grid-state">
              Email
            </label>
          </div> -->
      <button
        type="submit"
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded"
      >
        Login
      </button>
    </div>
  </form>
  {#if form?.success1}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">
      Logged In and your balance is {form?.balance.data.balance.summary}!
    </p>
  {/if}
</div>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <h1 class="font-bold mb-4 uppercase">Payment</h1>
  <form method="POST" action="?/payment">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="flex w-full">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3"
            for="grid-city"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="text"
            placeholder="Enter password"
            name="password"
          />
        </div>
      </div>
      <div class="flex w-full">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3"
          for="paymail"
        >
          Paymail
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="paymail"
          type="text"
          placeholder="Enter paymail"
          name="paymail"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3"
          for="amount"
        >
          Amount
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="amount"
          type="number"
          placeholder="Enter amount"
          name="amount"
        />
      </div>
    </div>

      <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-3" for="grid-state">
              Email
            </label>
          </div> -->
      <button
        type="submit"
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 ml-2 px-2 rounded"
      >
        Send
      </button>
    </div>
  </form>
  {#if form?.success2}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">
      Payment Successfull and the Transaction Id is <a href="https://whatsonchain.com/tx/{form?.payResponse.data.txid}">{form?.payResponse.data.txid}</a>!
    </p>
  {/if}
</div>
<div class="p-10"></div>
