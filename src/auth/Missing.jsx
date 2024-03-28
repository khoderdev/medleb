import { Link } from "react-router-dom";

const Missing = () => (
        <article className="flex flex-col items-center justify-start pt-16 h-screen bg-green-pri dark:bg-black-bg">
            <div className="max-w-md w-full bg-white-bg dark:bg-green-pri shadow-lg rounded-lg p-8 border-2 border-green-pri">
                <h1 className="text-6xl font-bold mb-4 text-center text-red-600">Oops!</h1>
                <p className="text-lg mb-8 text-center">Page Not Found</p>
                <div className="flex justify-center">
                    <Link to="/" className="text-yellow-pri text-xl hover:underline">Go to Homepage</Link>
                </div>
            </div>
        </article>
    );

export default Missing;
