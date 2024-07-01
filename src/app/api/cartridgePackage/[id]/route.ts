import type { VercelRequest, VercelResponse } from '@vercel/node';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// import controllerPackageLibrary from './library';
import { packageSpecs as controllerPackageLibrary } from '../../controller/librarySpecs';

// http://localhost:3000/api/controllerPackage/vitalikMasterNode where id=vitalikMasterNode in this case
export function GET(request: Request, { params }: { params: { id: string } }) {
  const jsonResponse = Response.json({
    data: params.id,
  });
  return jsonResponse;
}
