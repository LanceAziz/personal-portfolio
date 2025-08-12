import { useProjects } from "@/app/context/projectsContext";
import { styles } from "./searchStyles";

export default function Search() {
    const { searchTerm, setSearchTerm } = useProjects();
    return (
        <div className="col-lg-3 d-flex align-items-center p-1">
            <input value={searchTerm} style={styles.input} onChange={(e) => setSearchTerm(e.target.value)} className='w-100 rounded-4 px-3 py-1 border-0' placeholder='Search' type="text" />
        </div>
    )
}
