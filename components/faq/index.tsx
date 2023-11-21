"use client"
import {Select, SelectItem} from "@nextui-org/react";
  
export default function Faq() {   
       return (
        <div className="mx-auto text-white border-2 border-red-500 w-[1180px] h-[824px]">
            <div className="flex flex-col">
                <div className="h-[200px] text-5xl border-2 border-red-500 flex justify-center items-center">Frequently asked questions</div>
                <div className="border-2 border-red-500 pt-4 pl-4 mx-36">  
                <Select 
                    label="What is Viralyst?" 
                    className="max-w-xs" 
                >
                    <SelectItem key="first question" value="this">
                        Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand 
                    </SelectItem>
                    <SelectItem key="first question" value="this">
                        Viralyst is an innovative committee initiated by an experienced expertise to consult a means of earning through advertisement and monetizing companies brand 
                    </SelectItem>
                </Select>
                    <div></div>
                    <div></div>
                    <div>How does viralyst work?</div>
                    <div>Is viralyst available worldwide?</div>
                    <div>How do i get started?</div>
                </div>
            </div>
        </div>
    )
}
