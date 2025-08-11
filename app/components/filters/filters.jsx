import { TagFilters } from '@/app/utils/data';
import { styles } from './filtersStyles';
import { useProjects } from '@/app/context/projectsContext';

export default function Filters() {
    const { tag, setTag } = useProjects();
    
    return (
        <div className="col-lg-9 d-md-flex justify-content-md-center p-1">
            {
                TagFilters.map((tagFilter, index) => (
                    <div
                        key={index}
                        onClick={() => setTag(tagFilter)}
                        className='text-center'
                        style={{
                            ...styles.tag,
                            ...(tag === tagFilter ? styles.tagHover : {})
                        }}
                    >
                        <h3 className='fs-6 fw-lighter px-1'>{tagFilter}</h3>
                    </div>
                ))
            }
        </div>
    )
}
