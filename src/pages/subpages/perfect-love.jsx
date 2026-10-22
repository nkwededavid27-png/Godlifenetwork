import { NavLink } from "react-router-dom";
import { SquareArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";



export default function PerfectLove() {
    const { t, } = useTranslation();
    return (
        <div>
            {/* Header Banner */}
            <div
                className="relative h-100 bg-cover bg-center flex flex-col justify-center items-center text-white 
                            bg-[url('/perfectlove-cover.png')]
                            sm:bg-[url('/PLBanner-tablet.png')]
                            md:bg-[url('/PLBanner-laptop.png')]"
                
            >

            </div>
            <div className="fixed bottom-4 left-4 flex items-start">
                <NavLink
                    to="/blog"
                    className="flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                >
                    <SquareArrowLeft className="mr-2" /> {t("aboutBtn")}
                </NavLink>
            </div>

            <div className="max-w-4xl m-auto text-center bg-white mt-5 rounded-box">

                <div className="flex items-center justify-between mb-6 flex-wrap gap-4 
                shadow-[0_0_15px_rgba(255,0,150,0.6),0_0_30px_rgba(255,0,150,0.4)] rounded-lg">
                    <h3 className="text-xl lg:text-5xl font-bold text-red-900 uppercase ml-20 p-5">
                        Perfect love
                    </h3>
                    <p className="text-sm uppercase text-left tracking-wide text-gray-400 p-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti explicabo et unde nihil omnis consequuntur minus quo architecto porro ea quia ratione veniam, animi labore dicta reprehenderit magni id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus fugiat et commodi suscipit quisquam quae dolores obcaecati aliquam consequatur. Autem, ipsa. Sequi veniam facere esse placeat inventore, odit error?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum nihil, numquam optio ducimus molestiae expedita illo, nam eaque libero culpa! Inventore corporis cumque modi saepe minima autem eum necessitatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam tempora illum asperiores, dolorem veritatis quaerat qui doloremque nam quia sed quo corporis totam commodi mollitia numquam adipisci! Suscipit, magnam.
                    </p>
                </div>


            </div>
        </div>
    );
}