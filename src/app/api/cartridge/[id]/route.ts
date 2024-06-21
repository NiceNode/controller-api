import type { VercelRequest, VercelResponse } from '@vercel/node';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request

// import cartridgePackageLibrary from './library';
import { packageSpecs as cartridgePackageLibrary, specs } from '../../cartridge/librarySpecs';

// http://localhost:3000/api/cartridgePackage/vitalikMasterNode where id=vitalikMasterNode in this case
export function GET(request: Request, { params }: { params: { id: string } }) {
  
    const cartridge = specs.find(spec => spec?.specId === params.id);
    if(cartridge) {
        const jsonResponse = Response.json({
            data: cartridge,
          });
          return jsonResponse;
    }
    const jsonResponse = Response.json({
        error: 'Cartridge not found',
        code: '404'
        });
        return jsonResponse;

}
