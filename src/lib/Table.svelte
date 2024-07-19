<script>
  export let names;
</script>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <div class="flex items-center justify-between mb-4">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">List of Users</h2>
      <p class="text-sm text-gray-500">
        Fetched {names.length} users
      </p>
    </div>
  </div>
  <div class="divide-y divide-gray-900/5">
    {#each names as user (user.id)}
      <div class="flex items-center justify-between py-3">
        <form class="flex" method="POST" action="/profiles?/update">
          <div class="flex items-center space-x-4">
            <div class="flex">
              <input
                class="font-medium pt-1 leading-none w-auto"
                name="name"
                id="name"
                value={user.name}
                size={user.name.length}
              />
              <input
                class="font-medium pl-5 text-gray-500 pt-0 w-auto"
                name="email"
                id="email"
                value={user.email}
                size={user.email.length}
              />
              <input type="hidden" name="id" id="id" value={user.id} />
            </div>
          </div>
          <button class=" ml-4 r-1 float-right" type="submit">Update</button>
        </form>
        <form method="POST" action="/profiles?/delete">
          <input type="hidden" name="id" id="id" value={user.id} />

          <button type="submit">
            <img class="w-4 float-right" src="./trash-can.svg" alt="delete" />
          </button>
        </form>
      </div>
    {/each}
  </div>
</div>
