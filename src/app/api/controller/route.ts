export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// import controllerLibrary from './library';
import { specs as controllerLibrary } from './librarySpecs';

// available on local at http://localhost:3000/api/controllerLibrary
export function GET(request: Request) {
  const jsonResponse = Response.json({
    data: controllerLibrary,
  });
  return jsonResponse;
}
