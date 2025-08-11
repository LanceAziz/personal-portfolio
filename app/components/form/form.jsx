import { styles } from "./formStyles"

export default function Form() {
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <input type="text" className="form-control mb-2 rounded-5 focus-ring focus-ring-light" placeholder="Name" />
            </div>
            <div className="col-6">
                <input type="text" className="form-control mb-2 rounded-5 focus-ring focus-ring-light" placeholder="Email" />
            </div>
            <div className="col-12">
                <input type="text" className="form-control mb-2 rounded-5 focus-ring focus-ring-light" placeholder="Subject" />
            </div>
            <div className="col-12">
                <textarea rows={4} className="form-control mb-2 rounded-4 focus-ring focus-ring-light" placeholder="Message" />
            </div>
        </div>
    </div>
  )
}
