import useMenu from './Hooks/useMenu';

const PopularItem = () => {
    const [menu, loading, error] = useMenu();
    const list = menu.filter(item => item.category === 'popular');

    if (loading) {
        return (
            <div className="min-h-96 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                    <p className="mt-4 text-gray-600 text-lg">Loading delicious items...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-96 flex items-center justify-center">
                <div className="text-center text-red-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Oops! Something went wrong</h3>
                    <p className="text-gray-600">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (menu.length === 0) {
        return (
            <div className="min-h-96 flex items-center justify-center">
                <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Popular Items Found</h3>
                    <p className="text-gray-500">Check back later for our special selections!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Section Header */}
            <div className="text-center mb-12">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    🔥 Customer Favorites
                </span>
                <h2 className="text-4xl md:text-5xl font-bold exo text-gray-800 mb-4">
                    Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Popular</span> Items
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover the dishes our customers can't get enough of. Each item is carefully crafted to perfection.
                </p>
            </div>

            {/* Menu Grid */}
            <div className='max-w-6xl mx-auto '>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {list.map(item => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-bold text-gray-800 truncate pr-2">
                                        {item.name}
                                    </h2>
                                    <span className="text-lg text-[#D99904] font-semibold whitespace-nowrap">
                                        ${item.price}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.recipe}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    );
};

export default PopularItem;