

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Rechercher un bus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
