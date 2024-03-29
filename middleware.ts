import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    if(request.nextUrl.pathname.startsWith('/api/entries/')){
        const id = request.nextUrl.pathname.replace('/api/entries/','');
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

        console.log('isvalidId:' + checkMongoIDRegExp.test(id))
        if(!checkMongoIDRegExp.test(id)){
            const reqUrl = request.nextUrl.clone();
            reqUrl.pathname = '/api/bad-request';
            reqUrl.search = `?message=${id} is not a valid MongoID`
            return NextResponse.rewrite(reqUrl);
        }
    }

    
    return NextResponse.next();
}
 
// // See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/api/entries/:path',
],
};