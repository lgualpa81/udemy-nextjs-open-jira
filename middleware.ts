import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NextURL } from 'next/dist/server/web/next-url'

export function middleware(req: NextRequest) {
  //console.log({req: req.nextUrl});
  const entriesPath: string = '/api/entries/'
  if (req.nextUrl.pathname.startsWith(entriesPath)) {
    const id: string = req.nextUrl.pathname.split('/').pop() || ''
    //console.log({ id })
    const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    if (!checkMongoIDRegExp.test(id)) {
      const url: NextURL = req.nextUrl.clone()
      url.pathname = '/api/bad-request'
      url.search = `?message=${id} is not a valid mongoID`
      return NextResponse.rewrite(url)
    }
  }
  return NextResponse.next()
}

//See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //'/api/:path',
    '/api/entries/:path'
  ],
}