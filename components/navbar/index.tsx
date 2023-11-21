import {Btn1, BtnLogin, BtnRegister} from "../common/btn"
import {Button} from '@nextui-org/button'; 

export default function Navbar() {
    return (
        <div className="w-full h-fit">
            <div className="w-full px-10 h-[99px] max-lg:hidden max-w-[1280px] flex justify-between items-center mx-auto">
                <div className="">
                    <div className="text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Viralyst</div>                    
                </div>
                <div className="justify-start items-start gap-10 inline-flex">
                    <div className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">About</div>
                    <div className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">How it work</div>
                    <div className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">Pricing</div>
                    <div className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">Contact</div>
                    <div className="text-center cursor-pointer text-white text-lg font-normal font-['Inter'] leading-[18px]">Features</div>
                </div>
                <div className="flex justify-between items-center">                    
                    <BtnLogin name="Login"/>
                    <BtnRegister name="Register"/>
                </div>
                <Button>Click me</Button>
            </div>
            <div className="lg:hidden flex justify-between">
            </div>
        </div>
    )
  }
 
  