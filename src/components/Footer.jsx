import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Godlifelogo from "../assets/Godlife-logo.png";


export default function Footer() {
    const { t } = useTranslation();

    const [formData2, setFormData2] = useState({
        email: "",
        countryCode: "+234",
        phone: "",
        message: "",
    });
    const [successMessage2, setSuccessMessage2] = useState("");
    const [errorMessage2, setErrorMessage2] = useState("");

    const handleChange2 = (e) => {
        setFormData2({ ...formData2, [e.target.name]: e.target.value });
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_tjfnvlf",
                "template_7bo8o68",
                {
                    email: formData2.email,
                    message: formData2.message, // ✅ fixed
                },
                "pi28e_g2U3LQtiW2z"
            )
            .then(
                () => {
                    setSuccessMessage2(t("prayerSuccessMessage"));
                    setErrorMessage2("");

                    // Clear form
                    setFormData2({
                        email: "",
                        message: "",
                    });

                    setTimeout(() => setSuccessMessage2(""), 5000);
                },
                () => {
                    setErrorMessage2(t("prayerErrorMessage"));
                    setSuccessMessage2("");

                    setTimeout(() => setErrorMessage2(""), 5000);
                }
            );
    };
    return (
        <footer>
            <div className="footer md:footer-horizontal gap-5 text-base-content p-10 ">
                <aside>
                    <img
                        src={Godlifelogo}
                        alt="GLN Logo"
                        className="w-30 h-30"
                    />
                    <p className="font-[cursive]">
                        Godlife Network Int.
                        <br />
                        Connecting people with the life-changing power <br /> of God’s love through the gospel of grace <br /> and faith in Christ Jesus.
                    </p>
                </aside>
                <nav>
                    <h6 className="uppercase text-red-600 font-bold">Quick Links</h6>
                    <NavLink to="/" className="link link-hover font-black">Home</NavLink>
                    <NavLink to="/about" className="link link-hover font-black">About</NavLink>
                    <NavLink to="/event" className="link link-hover font-black">Events</NavLink>
                    <NavLink to="/blog" className="link link-hover font-black">Blog</NavLink>
                    <NavLink to="/media" className="link link-hover font-black">Media </NavLink>
                    <NavLink to="/contact" className="link link-hover font-black">Contact</NavLink>
                </nav>

                <nav className="m-0 md:m-auto ">
                    <h6 className="uppercase text-red-600 font-bold">Follow us on our Socials</h6>
                    <div className="grid grid-flow-col gap-4 text-left">
                        <a>
                            <svg
                                aria-label="Twitter"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                aria-label="YouTube"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                aria-label="Facebook"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <div className=" inset-0 bg-black/50 flex justify-center items-center z-10 m-auto">
                    <div className="p-6 rounded-lg shadow-lg w-80 sm:w-85 md:w-100">
                        <h3 className="text-xl text-red-600 font-semibold mb-4">
                            {t("prayerModalTitle")}
                        </h3>
                        <form className="space-y-4" onSubmit={handleSubmit2}>
                            <input
                                type="email"
                                name="email"
                                placeholder={t("prayerEmailPlaceholder")}
                                value={formData2.email}
                                onChange={handleChange2}
                                className="w-full border p-2 rounded bg-white text-black"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder={t("prayerMessagePlaceholder")}
                                value={formData2.message}
                                onChange={handleChange2}
                                className="w-full border p-2 rounded h-10  bg-white text-black"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full"
                            >
                                {t("prayerSendButton")}
                            </button>
                        </form>

                        {/* Success/Error messages */}
                        {successMessage2 && (
                            <p className="text-green-600 mt-2">{successMessage2}</p>
                        )}
                        {errorMessage2 && (
                            <p className="text-red-600 mt-2">{errorMessage2}</p>
                        )}


                    </div>
                </div>
            </div>

            <div className="text-center m-auto p-10">
                <p className="text-sm">© {new Date().getFullYear()} GodLife Network International. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

