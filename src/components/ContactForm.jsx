import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_qzw58in", "template_aokt4ib", form.current, {
                publicKey: "0Fv1OR4CyN6_mLss3",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    Swal.fire({
                        title: "Done.",
                        text: "Your Message Has Sent",
                        icon: "success"
                    });
                    e.target.reset()
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            );
    };

    return (
        <div className="dark">
        <main className="">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col p-5 w-full md:w-[80%] gap-5 border-2 mt-20 rounded-xl text-black">
            <input className="border rounded-full bg-[rgba(255,255,255,.5)] py-3 px-6 outline-none dark:bg-[rgba(255,255,255,0.8)]" placeholder="Name" type="text" name="user_name" required />
            <input className="border rounded-full bg-[rgba(255,255,255,.5)] py-3 px-6 outline-none dark:bg-[rgba(255,255,255,0.8)]" placeholder="Email" type="email" name="user_email" required />
            <textarea className=" p-6 resize-none rounded-xl bg-[rgba(255,255,255,.5)] outline-none dark:bg-[rgba(255,255,255,0.8)]" rows="10" cols="30" placeholder="Message" name="message" />
            <button type="submit" className="Submit bg-[royalblue] mt-6 text-center border rounded-full py-3 px-6 " required>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <span>Send</span>
            </button>

        </form>
        </main>
        </div>



    );
};

export default ContactUs;
