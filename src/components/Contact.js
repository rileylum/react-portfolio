import React, {useState} from "react";

function Contact() {

    const [fields, setFields] = useState({name:"",email:"",message:""});

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        console.log(e);
        let newFields = fields;
        newFields[e.target.id] = e.target.value;
        setFields({...newFields});
    }

    return (
        <section className="mb-3 p-3">
            <h2 className="text-center display-3 mb-3">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={fields.name} onChange={handleChange} className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" value={fields.email} onChange={handleChange} className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea value={fields.message} onChange={handleChange} className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </section>
    )
}

export default Contact;