export default function HomePageComponent() {
    return (
        <div className="w-[90%] max-w-6xl mx-auto p-6">
            <p className="font-bold text-2xl pb-6">Browse by Category</p>
            <div className="flex flex-wrap gap-6">
                {['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'].map((label, idx) => (
                    <div
                        key={idx}
                        className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        <span className="text-lg font-semibold text-blue-800">{label}</span>
                    </div>
                ))}
            </div>
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white mt-5">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Image + Rating */}
                    <div className="flex flex-col items-center lg:items-start">
                        <img
                            src="https://th.bing.com/th/id/OIP.M7ghT0sl59X-zSAOkkhlvgHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt="Sample"
                            className="rounded-lg shadow-md w-64 h-40 object-cover"
                        />
                        <div className="mt-3 flex items-center gap-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                                </svg>
                            ))}
                            <span className="text-sm text-gray-600 ml-2">(4.9)</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Amazing Book</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            by <span className="font-medium text-gray-700">Jhon</span>
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This is a short description of the book or content. It gives users an idea of what this item is about,
                            highlighting key features or storyline in a concise, inviting manner.
                        </p>
                    </div>
                </div>
            </div>
            {/* Header with border */}
            <div className="border border-blue-400 rounded-xl p-6 shadow-md bg-gradient-to-tr from-blue-50 to-blue-100 mt-5">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Sci-Fy</h2>
                    <button className="text-blue-600 border border-blue-500 px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition">
                        View All
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {['B1', 'B2', 'B3', 'B4', 'B5', 'B6'].map((box, index) => (
                        <div
                            key={index}
                            className="bg-white border border-blue-200 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-xl rounded-md mb-3">
                                {box}
                            </div>
                            <p className="text-gray-700 text-sm font-medium">T{index + 1}</p>
                            <p className="text-gray-500 text-xs">A{index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Header with border */}
            <div className="border border-blue-400 rounded-xl p-6 shadow-md bg-gradient-to-tr from-blue-50 to-blue-100 mt-5">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-blue-800">Romance</h2>
                    <button className="text-blue-600 border border-blue-500 px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition">
                        View All
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {['B1', 'B2', 'B3', 'B4', 'B5', 'B6'].map((box, index) => (
                        <div
                            key={index}
                            className="bg-white border border-blue-200 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-xl rounded-md mb-3">
                                {box}
                            </div>
                            <p className="text-gray-700 text-sm font-medium">T{index + 1}</p>
                            <p className="text-gray-500 text-xs">A{index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}