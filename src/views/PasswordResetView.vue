<template>
    <main class="p-5">
      <form action="" method="post" class="w-[400px] mx-auto p-6 my-16">
        <h2 class="text-2xl font-semibold text-center mb-5">
          Enter or Email to reset password
        </h2>
        <p class="text-center text-gray-500 mb-6">
          or
          <router-link
            to="/log-in"
            class="text-purple-600 hover:text-purple-500"
          >
            login with existing account
          </router-link>
        </p>

        <div class="mb-3">
          <input
            id="loginEmail"
            type="email"
            name="email"
            placeholder="Your email address"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
          />
        </div>
        <button
          class="btn-primary bg-green w-full"
        >
          Submit
        </button>
      </form>
    </main>
</template>

<script>
export default {
  name: "PasswordResetView"

}
</script>