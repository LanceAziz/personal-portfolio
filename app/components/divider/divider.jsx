import {styles} from "./dividerStyles";

export default function Divider({ width = "100%", borderWidth = "2px", padding = "0", color = "#ffffff41" }) {
    return (
        <div style={styles.dividerOutter(padding)} className="d-flex justify-content-center">
            <div className="my-3" style={styles.dividerInner(width, borderWidth,color)}></div>
        </div>
    )
}
