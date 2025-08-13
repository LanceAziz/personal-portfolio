import { useProjects } from "@/app/context/projectsContext";
import { styles } from "./searchStyles";

export default function Search() {
    const { searchTerm, setSearchTerm } = useProjects();
    return (
        <div className="col-lg-3 d-flex align-items-center p-1">
            <input value={searchTerm} style={styles.input} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' type="text" />
        </div>
    )
}
