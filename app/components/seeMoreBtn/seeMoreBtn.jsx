"use client"
import { styles } from './seeMoreBtnStyles';

export default function SeeMoreBtn({ showAll, setShowAll }) {
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
