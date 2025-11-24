import {NextRequest,NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req:NextRequest){

    try{
         await connectDB()
        const formData =await req.formData();
         let event;

         try{
             event=Object.fromEntries(formData.entries())
         }
         catch(e){
               return NextResponse.json({message:'Invalid JSON data format'})
         }
    }
    catch(e)
    {
        console.log(e);
    }
}