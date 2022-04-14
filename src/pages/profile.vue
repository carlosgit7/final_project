<template>

  <div class="flex flex-col w-1/2 mx-auto mt-10 p-4 text-xl font-light bg-blue-700 rounded-lg shadow-md items-center justify-center overflow-hidden">
    <h1 class="text-4xl text-orange-500">My Profile</h1>
    <h4 class="text-xs text-orange-500 mt-1">Click on field to edit</h4>
    <div class="flex flex-col m-auto ml-4 my-6">
      <span class="ml-1 font-normal">Name:</span> <input type="text" value="User's name" class="inline-flex bg-slate-200 rounded-md pl-2 border border-gray-300 font-light"> 
      <span class="mt-3 ml-1 font-normal">Email:</span> <input type="text" value="user@email.com" class="bg-slate-200 rounded-md pl-2 border border-slate-300 font-light"> 
      <span class="mt-3 ml-1 font-normal">DOB:</span> <input type="text" value="01/01/2022" class="bg-slate-200 rounded-md pl-2 border border-slate-300 font-light"> 
      <span class="mt-3 ml-1 font-normal">Language:</span> <input type="text" value="English" class="bg-slate-200 rounded-md pl-2 border border-slate-300 font-light">
     </div>
  </div>

</template>