import Link
 from "next/link";
function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-blue-900 ">
        <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-white">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <Link href="/contact-us">
                  <a className="hover:underline">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black opacity-50 flex justify-center py-3 items-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            © 2022 <a href="">RentAvenue™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer