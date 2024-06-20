export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// import cartridgePackageLibrary from './library';
import { packageSpecs as cartridgePackageLibrary } from '../cartridge/librarySpecs';


// available on local at http://localhost:3000/api/cartridgePackageLibrary
export function GET(request: Request) {
  const jsonResponse = Response.json({
    data: cartridgePackageLibrary,
  });
  return jsonResponse;
}
