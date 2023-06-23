/* 
 * Understanding syntax of the backend api
 * The accepted HTTP requests for NEXT.js
 *
 */

export async function GET(request) {
    return new Response("Hello, Next.js!")
}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}