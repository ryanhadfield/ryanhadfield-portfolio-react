import React from "react";
// import "materialize-css";
import { Container } from "react-bootstrap";
import "./mainStyle.css";
// import { } from "framer-motion";

function Contact() {
    return (
        <div class="container my-4">
            <div class="row">
                <h1 class="display-4 text-dark">Contact Me</h1>
            </div>
            <form>
                <div class="row mb-2">
                    <div class="col">
                        <div class="form-floating mb-2">
                            <input class="form-control" placeholder="First Name" />
                            <label>First Name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-2">
                            <input class="form-control" placeholder="Last Name" />
                            <label>Last Name</label>
                        </div>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                    />
                    <label>Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        style="height: 100px"
                    ></textarea>
                    <label>Comments</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">
                    Submit
          </button>
            </form>
        </div>

    );
}

export default Contact;