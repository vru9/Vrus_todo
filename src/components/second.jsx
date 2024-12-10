import dalit from "../assets/dalit.png"; // Ensure this path is correct and the image exists

export default function Second() {
  return (
    <div className="main flex justify-center flex-col items-center">
      <div className="subcontainer w-full text-center ">
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-4 select-none text-2xl font-bold text-gray-900 dark:text-white"
          >
            Vruddhi's Todo List
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90%] md:w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none "
            placeholder="Add a new task"
          />
        </div>
      </div>

      <div className="container flex flex-col justify-center items-center w-[80%] md:w-[100%]">
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Pending Tasks
            </h5>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://i.pinimg.com/originals/0a/1c/e8/0a1ce8b3dcc741e712333a3e255304cd.png"
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 m-4">
                    <p class="text-[1.18rem] font-medium text-gray-900 truncate dark:text-white">
                      Complete
                    </p>
                  </div>
                  <div class="inline-flex size-10 cursor-pointer items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={dalit} alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
