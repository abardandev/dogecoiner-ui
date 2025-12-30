import { NextResponse, NextRequest } from 'next/server';

const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  // Check if the pathname is not already in lowercase
  if (pathname !== pathname.toLowerCase()) {
    // Redirect to the lowercase version of the URL
    return NextResponse.redirect(
      new URL(pathname.toLowerCase(), req.nextUrl.origin)
    );
  }
  return NextResponse.next();
};

export default middleware;

// Optional: configure the middleware to run on specific paths
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };