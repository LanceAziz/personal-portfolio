export default function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="col-lg-3 d-flex align-items-center p-1">
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='w-100 rounded-4 px-3 py-1 border-0' placeholder='Search' type="text" />
        </div>
    )
}
