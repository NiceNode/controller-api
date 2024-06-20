export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// import cartridgeLibrary from './library';
import { specs as cartridgeLibrary } from './librarySpecs';


// available on local at http://localhost:3000/api/cartridgeLibrary
export function GET(request: Request) {
  const jsonResponse = Response.json({
    data: cartridgeLibrary,
  });
  return jsonResponse;
}
