import { Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";





export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "+234",
        phone: "",
        subject: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullPhone = `${formData.countryCode}${formData.phone}`;

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: fullPhone,
                    subject: formData.subject,
                    message: formData.message,
                },
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    setSuccessMessage("✅ Message sent successfully!");
                    setErrorMessage("");
                    setTimeout(() => setSuccessMessage(""), 3000); // clears after 3s
                },
                () => {
                    setErrorMessage("❌ Failed to send message. Please try again.");
                    setSuccessMessage("");
                    setTimeout(() => setErrorMessage(""), 3000); // clears after 3s
                }
            );

    };

    const [showModal, setShowModal] = useState(false);
    const [formData2, setFormData2] = useState({
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
        const fullPhone = `${formData2.countryCode}${formData2.phone}`;

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    phone: fullPhone,
                    message: formData2.message, // ✅ fixed
                },
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    setSuccessMessage2("🙏 Prayer request sent successfully!");
                    setErrorMessage2("");
                    setTimeout(() => setSuccessMessage2(""), 3000);
                },
                () => {
                    setErrorMessage2("❌ Failed to send prayer request.");
                    setSuccessMessage2("");
                    setTimeout(() => setErrorMessage2(""), 3000);
                }
            );
    };

    return (
        <>
            <div className=" w-full">
                {/* Header Banner */}
                <div
                    className="relative h-120 bg-cover bg-center flex flex-col justify-center items-center text-white"
                    style={{ backgroundImage: "url('https://i.pinimg.com/1200x/4f/a2/aa/4fa2aae3f69c3c53cc1dbf72237f3f5b.jpg')" }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent uppercase">Contact Us</h2>
                    <p className="text-lg text-black font-serif mt-2">We'd love to hear from you!</p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">
                    {/* Left Side - Contact Info */}
                    <div className=" p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg   group w-full   shadow-lg shadow-[#e7e7e8] ">
                        <div className="text-center flex justify-center gap-2">
                            <div className="lg:w-30 w-10 h-px bg-gray-400 m-auto"></div>
                            <h3 className="lg:text-2xl text-xl text-red-600 font-bold mb-4 ">Get In Touch</h3>
                            <div className="lg:w-30 w-10 h-px bg-gray-400 m-auto"></div>
                        </div>

                        <div className="flex gap-4 p-3">
                            <PhoneCall className="w-8 h-8 text-red-600 p-auto" />
                            <div>
                                <h6 className="font-black">Call Us:</h6>
                                <p> +123-456-7890</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-400 m-auto"></div>

                        <div className="flex gap-4 p-3">
                            <Mail className="w-8 h-8 text-red-600 p-auto" />
                            <div>
                                <h6 className="font-black"> Email Us: </h6>
                                <p className="mb-2">info@yourchurch.com</p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-400 m-auto"></div>

                        <div className="flex gap-4 p-3">
                            <MapPin className="w-8 h-8 text-red-600 p-auto" />
                            <div>
                                <h6 className="font-black">Visit Us:</h6>
                                <p className="mb-2">Every last Thursday</p>
                                <p className="mb-2">Simidjola studio, Yenewa</p>
                            </div>
                        </div>

                        <div className="text-center flex justify-center gap-5 mt-5">
                            <div className="lg:w-30 w-15 h-px bg-gray-400 m-auto"></div>
                            <h4 className="text-xl font-bold text-red-600 mb-2">Follow Us</h4>
                            <div className="lg:w-30 w-15 h-px bg-gray-400 m-auto"></div>
                        </div>

                        <div className="grid grid-cols-3 space-x-4 m-auto">
                            <a href="#" className="text-center place-items-center">

                                <svg
                                    className="text-center"
                                    viewBox="0 0 48 48"
                                    width="64"
                                    height="64" fill="none"
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
                                <p className="font-black">Facebook</p>
                            </a>

                            <a className="text-center place-items-center">
                                <svg width="68" height="68" viewBox="-12.72 -12.72 49.44 49.44" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(3.120000000000001,3.120000000000001), scale(0.74)"><rect x="-12.72" y="-12.72" width="49.44" height="49.44" rx="24.72" fill="#ffffff" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564" stroke="#000000" strokeLinejoin="round"></path> </g></svg>
                                <p className="font-black">tiktock</p>
                            </a>

                            <div className="text-center place-items-center">
                                <svg width="68" height="68" viewBox="0 0 48.00 48.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Youtube-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-200.000000, -368.000000)" fill="#CE1312"> <path d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z" id="Youtube"> </path> </g> </g> </g></svg>
                                <p className="font-black">Youtube</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg shadow-[#e7e7e8]">
                         <div className="text-center flex justify-center gap-2">
                            <div className="lg:w-30 w-20 h-px bg-gray-400 m-auto"></div>
                            <h3 className="lg:text-2xl text-lg text-red-600 font-bold mb-4 ">Send Us a Message</h3>
                            <div className="lg:w-30 w-20 h-px bg-gray-400 m-auto"></div>
                        </div>
                  
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"j
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded border-red-600 bg-white text-black"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded border-red-600 bg-white text-black"
                                required
                            />
                            {/* Phone with Country Code */}
                            <div className="flex space-x-2">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className=" border p-2 rounded border-red-600 bg-white text-black w-23"
                                >
                                    <option value="+244">🇦🇴 Angola (+244)</option>
                                    <option value="+247">🇦🇨 Ascension Island (+247)</option>
                                    <option value="+61">🇦🇺 Australia (+61)</option>
                                    <option value="+229">🇧🇯 Benin (+229)</option>
                                    <option value="+267">🇧🇼 Botswana (+267)</option>
                                    <option value="+55">🇧🇷 Brazil (+55)</option>
                                    <option value="+226">🇧🇫 Burkina Faso (+226)</option>
                                    <option value="+257">🇧🇮 Burundi (+257)</option>
                                    <option value="+238">🇨🇻 Cabo Verde (+238)</option>
                                    <option value="+237">🇨🇲 Cameroon (+237)</option>
                                    <option value="+236">🇨🇫 Central African Republic (+236)</option>
                                    <option value="+235">🇹🇩 Chad (+235)</option>
                                    <option value="+86">🇨🇳 China (+86)</option>
                                    <option value="+269">🇰🇲 Comoros (+269)</option>
                                    <option value="+242">🇨🇬 Republic of the Congo (+242)</option>
                                    <option value="+243">🇨🇩 DR Congo (+243)</option>
                                    <option value="+225">🇨🇮 Côte d'Ivoire (+225)</option>
                                    <option value="+253">🇩🇯 Djibouti (+253)</option>
                                    <option value="+20">🇪🇬 Egypt (+20)</option>
                                    <option value="+240">🇬🇶 Equatorial Guinea (+240)</option>
                                    <option value="+268">🇸🇿 Eswatini (+268)</option>
                                    <option value="+251">🇪🇹 Ethiopia (+251)</option>
                                    <option value="+33">🇫🇷 France (+33)</option>
                                    <option value="+241">🇬🇦 Gabon (+241)</option>
                                    <option value="+233">🇬🇭 Ghana (+233)</option>
                                    <option value="+224">🇬🇳 Guinea (+224)</option>
                                    <option value="+245">🇬🇼 Guinea-Bissau (+245)</option>
                                    <option value="+49">🇩🇪 Germany (+49)</option>
                                    <option value="+62">🇮🇩 Indonesia (+62)</option>
                                    <option value="+91">🇮🇳 India (+91)</option>
                                    <option value="+964">🇮🇶 Iraq (+964)</option>
                                    <option value="+972">🇮🇱 Israel (+972)</option>
                                    <option value="+39">🇮🇹 Italy (+39)</option>
                                    <option value="+81">🇯🇵 Japan (+81)</option>
                                    <option value="+254">🇰🇪 Kenya (+254)</option>
                                    <option value="+82">🇰🇷 South Korea (+82)</option>
                                    <option value="+231">🇱🇷 Liberia (+231)</option>
                                    <option value="+218">🇱🇾 Libya (+218)</option>
                                    <option value="+266">🇱🇸 Lesotho (+266)</option>
                                    <option value="+261">🇲🇬 Madagascar (+261)</option>
                                    <option value="+265">🇲🇼 Malawi (+265)</option>
                                    <option value="+223">🇲🇱 Mali (+223)</option>
                                    <option value="+222">🇲🇷 Mauritania (+222)</option>
                                    <option value="+230">🇲🇺 Mauritius (+230)</option>
                                    <option value="+262">🇾🇹 Mayotte / 🇷🇪 Réunion (+262)</option>
                                    <option value="+258">🇲🇿 Mozambique (+258)</option>
                                    <option value="+264">🇳🇦 Namibia (+264)</option>
                                    <option value="+227">🇳🇪 Niger (+227)</option>
                                    <option value="+234">🇳🇬 Nigeria (+234)</option>
                                    <option value="+92">🇵🇰 Pakistan (+92)</option>
                                    <option value="+970">🇵🇸 Palestine (+970)</option>
                                    <option value="+63">🇵🇭 Philippines (+63)</option>
                                    <option value="+250">🇷🇼 Rwanda (+250)</option>
                                    <option value="+7">🇷🇺 Russia (+7)</option>
                                    <option value="+246">🇸🇭 Saint Helena (+246)</option>
                                    <option value="+239">🇸🇹 São Tomé & Príncipe (+239)</option>
                                    <option value="+248">🇸🇨 Seychelles (+248)</option>
                                    <option value="+232">🇸🇱 Sierra Leone (+232)</option>
                                    <option value="+252">🇸🇴 Somalia (+252)</option>
                                    <option value="+211">🇸🇸 South Sudan (+211)</option>
                                    <option value="+34">🇪🇸 Spain (+34)</option>
                                    <option value="+249">🇸🇩 Sudan (+249)</option>
                                    <option value="+268">🇸🇿 Eswatini (+268)</option>
                                    <option value="+963">🇸🇾 Syria (+963)</option>
                                    <option value="+255">🇹🇿 Tanzania (+255)</option>
                                    <option value="+228">🇹🇬 Togo (+228)</option>
                                    <option value="+216">🇹🇳 Tunisia (+216)</option>
                                    <option value="+256">🇺🇬 Uganda (+256)</option>
                                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                                    <option value="+1">🇺🇸 United States (+1)</option>
                                    <option value="+260">🇿🇲 Zambia (+260)</option>
                                    <option value="+263">🇿🇼 Zimbabwe (+263)</option>
                                    <option value="+27">🇿🇦 South Africa (+27)</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="812 345 6789"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="flex-1 border w-29 p-2 rounded border-red-600 bg-white text-black"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border p-2 rounded border-red-600 bg-white text-black"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border p-2 rounded border-red-600 bg-white text-black h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                            >
                                Send Message
                            </button>

                            {/* ✅ Success/Error messages */}
                            {successMessage && (
                                <p className="text-green-600 font-medium mt-2">{successMessage}</p>
                            )}
                            {errorMessage && (
                                <p className="text-red-600 font-medium mt-2">{errorMessage}</p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-4 p-3">Our Location</h3>
                    <div className="w-full h-64 bg-gray-200 rounded-lg">[Map Embed Here]</div>
                </div>

                {/* Prayer Request Section */}
                <div
                    className="mt-12 flex flex-col justify-center items-center text-center h-96 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://i.pinimg.com/736x/e4/47/fd/e447fd19010d6f10fb74a0e5ac4179c4.jpg')",
                    }}
                >
                    <h3 className="text-4xl text-black font-bold mb-4">Join Us in Prayer</h3>
                    <p className="mb-4 text-black">Let us know how we can pray for you</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                    >
                        Submit Prayer Request
                    </button>

                    {/* Floating Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                <h3 className="text-xl text-gray-600 font-semibold mb-4">Prayer Request</h3>
                                <form className="space-y-4" onSubmit={handleSubmit2}>
                                    <div className="flex space-x-2">
                                        <select
                                            name="countryCode"
                                            value={formData2.countryCode}
                                            onChange={handleChange2}
                                            className="border rounded px-2 py-2 bg-white text-black w-28"
                                        >
                                            <option value="+234">🇳🇬 Nigeria (+234)</option>
                                            <option value="+229">🇧🇯 Benin (+229)</option>
                                            <option value="+1">🇺🇸 United States (+1)</option>
                                            <option value="+44">🇬🇧 UK (+44)</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="812 345 6789"
                                            value={formData2.phone}
                                            onChange={handleChange2}
                                            className="flex-1 border p-2 rounded bg-white text-black"
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Write your prayer request..."
                                        value={formData2.message}
                                        onChange={handleChange2}
                                        className="w-full border p-2 rounded h-32  text-black"
                                        required
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full"
                                    >
                                        Send Request
                                    </button>
                                </form>

                                {/* Success/Error messages */}
                                {successMessage2 && (
                                    <p className="text-green-600 mt-2">{successMessage2}</p>
                                )}
                                {errorMessage2 && (
                                    <p className="text-red-600 mt-2">{errorMessage2}</p>
                                )}

                                {/* Close button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="mt-4 text-gray-600 hover:text-black"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>



            </div>

        </>
    );
}