import { HiBookOpen, HiMenu } from "react-icons/hi";
import { FaMasksTheater, FaReadme } from "react-icons/fa6";
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="bg-white shadow-md p-4 text-xs lg:text-sm flex">
                    <h2 className="mr-1">Home /</h2>
                    <p className="text-gray-500 mr-1">Student Profile / </p>
                    <p className="text-gray-500">2021-04-00075 | ABDALLAH, HANANI Y</p>
                </div>

                <div className="bg-white shadow-md m-6">
                    <div className="border-b-2 border-gray-300">
                        <img src="" alt="hanan" />
                        <div className="py-2 flex justify-center items-center">
                            <HiMenu />
                        </div>
                    </div>
                    <ol className="text-sm p-4 space-y-3">
                        <li className="flex items-center"> <FaMasksTheater className="mr-1" />Change theme</li>
                        <li className="text-gray-400 flex items-center"> <FaReadme className="mr-1" />1st Year(2021/22)</li>
                        <li className="text-green-800 font-semibold flex items-center"><FaReadme className="mr-1" />2nd Year(2022/23)</li>
                    </ol>
                </div>
                <div className="bg-white shadow-md m-6 p-4">
                    <h1 className="text-green-800 text-2xl font-semibold flex items-center">
                        <FaReadme className="mr-1" />
                        2nd Year(2022/23)
                    </h1>
                    <Link href="/" className="mt-5 text-blue-800 text-sm">My Courses & Results</Link>
                </div>
            </div>
        </>
    );
}
 
export default HomePage;