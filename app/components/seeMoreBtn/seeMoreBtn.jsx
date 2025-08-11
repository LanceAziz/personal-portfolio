"use client"
import { styles } from './seeMoreBtnStyles';
import { useProjects } from '@/app/context/projectsContext';

export default function SeeMoreBtn() {
    const { showAll, setShowAll } = useProjects();
    const onToggle = () => setShowAll(prev => !prev);
    
    return (
        <div className='w-100 d-flex flex-column align-items-center'>
            <button
                type="button"
                style={styles.seeMoreBtn}
                onClick={onToggle}
                aria-expanded={showAll}
            >
                {showAll ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}
