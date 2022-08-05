<template>

    <div
      class="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div class="relative z-10 md:w-1/2 w-full">
        <img
          class="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
          src="../assets/img/leaf.png"
          alt=""
        />
        <span class="flex items-center px-1 text-xl text-green">
          <span class="font-medium">100% Home Cooked</span>
          <img class="w-auto h-8" src="../assets/img/vegetable.png" alt="" />
        </span>
        <h1
          class="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap"
        >
          Healthy Lifestyle <br />
          is your only <br />
          <span class="whitespace-nowrap text-green"> unfair advantage </span>
        </h1>
        <p class="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
          Choose healthy habits with Tamu Dishes daily meal prepared by our expert nutritionist
          and chef
        </p>
        <div class="flex pt-8 space-x-4 sm:space-x-6">
          <button
            class="flex justify-center items-center w-full sm:w-auto h-13 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300"
          >
          <router-link to="/sign-up">
            Get started
          </router-link>
            
          </button>
          <button
            class="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
          >
          <router-link to="/exotic" >
            Explore menu
          </router-link>
          </button>
        </div>
        <div class="flex pt-20">
          <img class="w-24" src="../assets/img/chef.png" alt="" />
          <div class="pt-5 pl-3">
            <div class="text-xl font-bold leading-relaxed">Chef of the month</div>
            <div class="inline-flex text-gray-600 leading-relaxed">
              People loved his 🍳
            </div>
            <div class="font-bold text-green leading-relaxed">80+ famous dishes</div>
          </div>
        </div>
       
      </div>

      <div class="relative md:w-1/2 w-full flex flex-col justify-between">
        <img
          class="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end"
          src="../assets/img/dish.png"
          alt=""
        />
        <div
          class="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <div class="flex -space-x-3">
            <div
              class="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src="../assets/avatar/blackcouple.webp" alt="" />
            </div>
            <div
              class="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src="../assets/avatar/blackwoman002.jpg" alt="" />
            </div>
            <div
              class="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
            >
              <img src="../assets/avatar/blackwon001.jpg" alt="" />
            </div>-
          </div>
          <div class="pt-3 font-bold">Happy customers</div>
          <div class="flex items-center text-gray-600 leading-relaxed">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                <path d="M8.11365 0.900002L9.80057 6.0918H15.2596L10.8431 9.30052L12.5301 14.4923L8.11365 11.2836L3.69724 14.4923L5.38416 9.30052L0.96775 6.0918H6.42673L8.11365 0.900002Z" fill="#FBC402" />
            </svg>
            <span class="pl-1">4.9 (+2.5k Ratings)</span>
          </div>
        </div>
        <div
          class="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <img class="w-auto h-20 self-end" src="../assets/img/driver.png" alt="" />
          <div class="pr-7 pl-2 py-5">
            <div class="font-bold">Fast delivery</div>
            <div class="text-gray-600 leading-relaxed">30 mins delivery 🚀</div>
          </div>
        </div>
        <div class="hidden md:flex justify-end space-x-1 font-bold">
            <span>Powered by</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-900 fill-current">
            <path
                d="M23 12.08C23 13.1332 21.3099 13.9053 21.0027 14.8555C20.6843 15.8404 21.5888 17.461 20.9949 18.2808C20.395 19.109 18.5774 18.7424 17.7532 19.3449C16.9371 19.9415 16.7257 21.7947 15.7454 22.1146C14.7994 22.423 13.5484 21.0587 12.5 21.0587C11.4516 21.0587 10.2006 22.423 9.25465 22.1144C8.27427 21.7947 8.06289 19.9415 7.24678 19.3446C6.42264 18.742 4.60455 19.1087 4.00511 18.2806C3.41118 17.4607 4.31574 15.8402 3.9973 14.8553C3.69011 13.9053 2 13.1332 2 12.08C2 11.0268 3.69011 10.2547 3.9973 9.30447C4.31574 8.31958 3.41118 6.69904 4.00511 5.87919C4.60501 5.05103 6.42264 5.41756 7.24678 4.81514C8.06289 4.21849 8.27427 2.36528 9.25465 2.04538C10.2006 1.73701 11.4516 3.10135 12.5 3.10135C13.5484 3.10135 14.7994 1.73701 15.7454 2.04561C16.7257 2.36528 16.9371 4.21849 17.7532 4.81537C18.5774 5.41803 20.3954 5.05126 20.9949 5.87942C21.5888 6.69927 20.6843 8.31982 21.0027 9.3047C21.3099 10.2547 23 11.0268 23 12.08Z" />
            <path
                d="M12.5375 6.88501L9.51461 12.5753C9.48146 12.6378 9.465 12.7077 9.46681 12.7785C9.46862 12.8492 9.48865 12.9182 9.52495 12.9789C9.56125 13.0396 9.6126 13.0899 9.67402 13.1248C9.73544 13.1598 9.80484 13.1783 9.87551 13.1786H11.4645C11.5183 13.1786 11.5717 13.1892 11.6215 13.2098C11.6712 13.2304 11.7165 13.2606 11.7546 13.2987C11.7927 13.3368 11.8229 13.3821 11.8435 13.4319C11.8641 13.4817 11.8747 13.5351 11.8747 13.589V17.0075C11.8747 17.4301 12.4359 17.577 12.6425 17.2082L15.7985 11.5724C15.8334 11.5099 15.8514 11.4394 15.8507 11.3679C15.85 11.2963 15.8306 11.2262 15.7945 11.1644C15.7583 11.1027 15.7067 11.0514 15.6447 11.0158C15.5827 10.9802 15.5125 10.9614 15.441 10.9612L13.7185 10.9594C13.6098 10.9592 13.5057 10.9159 13.4289 10.8389C13.3521 10.762 13.3089 10.6577 13.3089 10.549V7.07787C13.3096 6.65011 12.738 6.5076 12.5375 6.88501Z"
                fill="white" />
            </svg>
            <span>Akamuran</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "LandingPage",

    mounted(){

      document.title = 'Tamu | Dishes'
    },

}
</script>
