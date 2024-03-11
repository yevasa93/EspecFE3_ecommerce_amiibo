import { render, screen } from "@testing-library/react";
import SeriesPage from '@/pages/series';
import { Serie } from "@/interface";
import { getSeries } from "@/services/getSeries";
import "@testing-library/jest-dom"; 
import { log } from "console";

jest.mock('next/router', () => ({
    useRouter: ()=>({
        locale: 'es',
        asPath: '/series'
    })
}));

jest.mock('../../../src/services/getSeries.ts', ()=> ({
    getSeries : jest.fn()
}));

describe('Tests on SeriesPage', () => {

    test('should show the tittle twice', () => {
        render( <SeriesPage series={[]} />);
        //screen.debug();
        const title = screen.getAllByText(/Series/i);
        expect(title.length).toBe(2);
    });
    test('should show the tittle', () => {
    
        const series: Serie[]=
            [
                {
                    "name": "Animal Crossing",
                    "key": "03000502",
                },
                {
                    "name": "Animal Crossing",
                    "key": "00b40502",
                },
            ];
        (getSeries as jest.Mock).mockResolvedValue(series);
        render( <SeriesPage series={series} />);
        screen.debug();
        const titles = screen.getAllByText(/Animal Crossing/i);

        //-----------Dos formas para probarlo-------------------
        expect(screen.findByText('Animal Crossing')).toBeTruthy();
        //expect(titles.length).toBe(2);        
    });

});