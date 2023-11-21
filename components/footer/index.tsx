import {Btn1} from "../common/btn"
export default function Footer() {
    return (
        <div className="h-[474px] flex flex-row justify-between text-white px-10">
            <div className="mt-48">
                <div className="w-[300px] h-[84px]">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</div>
                <div className="mt-12 w-[250px] h-[28px]">All rights reserved.</div>
            </div>
            <div className="mt-24 w-[642px] h-[240px] flex justify-between pr-4">
                <div className="flex flex-col justify-between">
                    <div className="font-bold">Landings</div>
                    <div>Home</div>
                    <div>Products</div>
                    <div>Services</div>
                </div>
                <div className="flex flex-col justify-between ">
                    <div className="font-bold">Company</div>
                    <div>Home</div>
                    <div className="flex flex-row">
                        <div>Careers</div>
                        <div className="ml-4"><Btn1 name="Hiring"/></div>
                    </div>
                    <div>Services</div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="font-bold">Resources</div>
                    <div>Blog</div>
                    <div>Products</div>
                    <div>Services</div>
                </div>
            </div>
        </div>
    )
  }
  