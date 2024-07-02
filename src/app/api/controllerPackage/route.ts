export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// import controllerPackageLibrary from './library';
import { packageSpecs as controllerPackageLibrary } from '../controller/librarySpecs';

// available on local at http://localhost:3000/api/controllerPackageLibrary
export function GET(request: Request) {
  const jsonResponse = Response.json({
    data: controllerPackageLibrary,
  });
  return jsonResponse;
}
