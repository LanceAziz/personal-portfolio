import { TagFilters } from '@/app/utils/data';
import { styles } from './filtersStyles';

export default function Filters({ tag, setTag }) {
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
