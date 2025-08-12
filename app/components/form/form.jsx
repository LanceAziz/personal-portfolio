import { styles } from "./formStyles"

export default function Form() {
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <input type="text" style={styles.input} placeholder="Name" />
            </div>
            <div className="col-6">
                <input type="text" style={styles.input} placeholder="Email" />
            </div>
            <div className="col-12">
                <input type="text" style={styles.input} placeholder="Subject" />
            </div>
            <div className="col-12">
                <textarea rows={4} style={styles.input} placeholder="Message" />
            </div>
        </div>
    </div>
  )
}
