export default function Nav() {
  return (
    <nav class="flex justify-between items-center w-[92%]  mx-auto py-5">
            <div>
                <h1 className="text-3xl font-bold">NavBar</h1>
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a class="hover:text-gray-500" href="/">Home</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="/product">Products</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="/services">Services</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="/about">About</a>
                    </li>
                    <li>
                        <a class="hover:text-gray-500" href="/contect">Contect</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6">
                <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
    </nav>
  )
}