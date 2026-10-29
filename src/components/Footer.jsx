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
                "template_7bo8o50",
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
            <div className="footer md:footer-horizontal gap-5 text-base-content p-5 ">
                <aside>
                    <img
                        src={Godlifelogo}
                        alt="GLN Logo"
                        className="w-30 h-30"
                    />
                    <p className="font-serif w-85 md:w-100">
                        GodLife Network Int.
                        <br />
                        {t("footerDescription")}
                    </p>
                </aside>
                <nav>
                    <h6 className="uppercase text-red-600 font-bold">
                        {t("footerQuickLinks")}
                    </h6>
                    <NavLink to="/">
                        {t("footerHome")}
                    </NavLink>

                    <NavLink to="/about">
                        {t("footerAbout")}
                    </NavLink>

                    <NavLink to="/event">
                        {t("footerEvents")}
                    </NavLink>

                    <NavLink to="/blog">
                        {t("footerBlog")}
                    </NavLink>

                    <NavLink to="/media">
                        {t("footerMedia")}
                    </NavLink>

                    <NavLink to="/contact">
                        {t("footerContact")}
                    </NavLink>
                </nav>

                <nav className="m-0 md:m-auto ">
                    <h6 className="uppercase text-red-600 font-bold">
                        {t("footerFollowUs")}
                    </h6>
                    <div className="grid grid-flow-col gap-4 text-left">
                        <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=61556110006448" className="text-center place-items-center">

                            <svg
                                className="text-center"
                                viewBox="0 0 48 48"
                                width="50"
                                height="50" fill="none"
                                xmlns="http://www.w3.org/2000/svg"><g
                                    id="SVGRepo_bgCarrier"
                                    strokeWidth="0"></g><g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></g><g
                                            id="SVGRepo_iconCarrier"> <circle
                                                cx="24" cy="24" r="20"
                                                fill="#3B5998"></circle>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z" fill="white"></path> </g></svg>
                            <p className="font-black">
                                {t("contactFacebook")}
                            </p>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@godlife.network?_r=1&_d=egd27dij132la1&sec_uid=MS4wLjABAAAA1R-U61A5eEpx9GPu_CfJyJtjfwLX6XhkgrSNVlvZzx8m8T_rQrPE0rwc7M2dZnyV&share_author_id=7579558035212125196&sharer_language=en&source=h5_m&u_code=ebbj29cj5jk9aa&timestamp=1793269810&user_id=7308842297725404166&sec_user_id=MS4wLjABAAAABOhHOxcRrJjq3yj_CnM9K6p2vF3M6-6-FF8I-11CI9Tjplpm1_RC8M7BDTvS6Gdm&item_author_type=2&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7693495210660415284&share_link_id=c04a67c4-bc1e-450c-a243-584aaa0a8233&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b5080%2Cb5836&social_share_type=5&share_enter_from=others_homepage&item_author_type=2&enable_checksum=1" className="text-center place-items-center">
                            <svg width="50" height="50" viewBox="-12.72 -12.72 49.44 49.44" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(3.120000000000001,3.120000000000001), scale(0.74)"><rect x="-12.72" y="-12.72" width="49.44" height="49.44" rx="24.72" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.50211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7504 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.35084 8.81073 9.35084M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564" stroke="#000000" strokeLinejoin="round"></path> </g></svg>
                            <p className="font-black">
                                {t("contactTiktok")}
                            </p>
                        </a>

                        <a href='https://youtube.com/@godlifenetworkintl?si=uZbN94EzlnbOsHLS' target="_blank" rel="noopener noreferrer" className="text-center place-items-center">
                            <svg width="50" height="50" viewBox="0 0 48.00 48.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Youtube-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-200.000000, -350.000000)" fill="#CE1312"> <path d="M219.044,391.269916 L219.0425,377.507742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,350.610299 241.7405,350.601235 240.803,350.489448 C234.086,350 224.0105,350 224.0105,350 L223.9895,350 C223.9895,350 213.914,350 207.197,350.489448 C206.258,350.601235 204.2135,350.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.50,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube"> </path> </g> </g> </g></svg>
                            <p className="font-black">
                                {t("contactYoutube")}
                            </p>
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

