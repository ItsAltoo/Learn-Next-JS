import prisma from "@/helper/prisma";
import { NextResponse } from "next/server";


export async function GET(){
    const data = await prisma.person.findMany();
    return NextResponse.json(data)
}