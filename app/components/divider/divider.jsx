export default function Divider({ width = "100%", padding = "0" }) {
    return (
        <div style={{ width: "100%", padding: `${padding} 0` }} className="d-flex justify-content-center">
            <div className="border bt-white my-3" style={{ width: width }}></div>
        </div>
    )
}
