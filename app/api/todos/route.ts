import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://jsonplaceholder.typicode.com/todos"

const API_KEY = process.env.DATA_API_KEY as string

export async function GET() {

    const res = await fetch(DATA_SOURCE_URL)
    const todos:Todo[] = await res.json()

    console.log(todos,'todso')

    return NextResponse.json(todos)

}


export async function DELETE(request:Request){
    const {id}:Partial <Todo> = await request.json()

    if(!id) return NextResponse.json({"message":"Todo is  required"})


    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "API-Key": API_KEY,
        }
    })
    return NextResponse.json({"message":`Todo ${id} is deleted`})
}