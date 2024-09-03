export function GET(req) {
    const data = [234400, 721302, 110003, 560017];
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}



            
