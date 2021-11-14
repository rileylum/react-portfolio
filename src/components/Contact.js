import React, {useState} from "react";

function Contact() {

    const [fields, setFields] = useState({name:"",email:"",message:""});
    const [errors, setErrors] = useState({name:"",email:"",message:""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://submit-form.com/xdx3pTWX", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: fields.name,
                email: fields.email,
                message: fields.message
            })
        });
        alert("Form submitted");
        setFields({name:"",email:"",message:""})
    }

    const handleChange = (e) => {
        let newFields = fields;
        newFields[e.target.id] = e.target.value;
        setFields({...newFields});
    }

    const formValidate = (e) => {

        let field = e.target.id;
        console.log(field)
        let newErrors = errors;
        if (!e.target.value) {
            newErrors[e.target.id] = `${field} cannot be empty`
        }
        if (field === "email") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(e.target.value).toLowerCase())) {
                newErrors["email"] = "email must be valid"
            }
        }
        setErrors({...newErrors});
    }

    const clearValidate = (e) => {
        let newErrors = errors;
        newErrors[e.target.id] = "";
        setErrors({...newErrors});
    }

    return (
        <section className="mb-3 p-3 d-flex flex-column">
            <h2 className="text-center display-3 mb-3">Contact Me</h2>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="d-flex flex-column justify-content-center text-center text-white fs-3">
                        <div><i className="far fa-envelope text-secondary mx-3"></i><span>rileylum@adam.com.au</span>
                        </div>
                        <div><i className="far fa-phone text-secondary mx-3"></i><span>+61 434 810 436</span>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-center display-5 fs-2 my-3">Send me a message: </h3>
            <form className="col-12 col-md-8 col-lg-6 m-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" value={fields.name} onChange={handleChange} onBlur={formValidate} onFocus={clearValidate} className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" name="email" value={fields.email} onChange={handleChange} onBlur={formValidate} onFocus={clearValidate} className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" value={fields.message} onChange={handleChange}  onBlur={formValidate} onFocus={clearValidate} className="form-control" id="message" rows="3"></textarea>
                </div>
                {errors && (<p className="d-block">{`${errors.name}`}</p>)}
                {errors && (<p className="d-block">{`${errors.email}`}</p>)}
                {errors && (<p className="d-block">{`${errors.message}`}</p>)}
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
        </section>
    )
}

export default Contact;
