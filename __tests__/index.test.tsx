import HomePage from "@/pages";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //para que funcione el toBeInTheDocument
import { Character } from "@/interface";
import { getCharacters } from "@/services/getCharacters";

jest.mock('next/router', () => ({
    useRouter: ()=>({
        locale: 'es',
        asPath: '/'
    }) 
}));

jest.mock('../src/services/getCharacters.ts', ()=> ({
    getCharacters: jest.fn()
}));

describe(' Test on HomePage', () => {

    test('Should render the title "Ecommerce" ', () => {
        render(<HomePage characters={[]}/>);
        const title = screen.getByText(/Ecommerce/i);
        expect(title).toBeTruthy;        
        //expect(title).toBeInTheDocument();      
    });

    test('should render the cards/characters', () => {
        //render(<HomePage characters={}/>);
        const characters: Character[] = [
			{
				tail: "1",
				name: "Mario",
				image:
					"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
				amiiboSeries: "Super Smash Bros.",
				character: "Mario",
				gameSeries: "Super Mario",
				head: "00000000",
				release: {
                    au: new Date("2014-11-29"),
                    eu: new Date("2014-11-28"),
                    jp: new Date("2014-12-06"),
                    na: new Date("2014-11-21"),
				},
				type: "Figure",
			},
			{
				tail: "2",
				name: "Luigi",
				image:
					"https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
				amiiboSeries: "Super Smash Bros.",
				character: "Luigi",
				gameSeries: "Super Mario",
				head: "00010000",
				release: {
					au: new Date("2014-11-29"),
					eu: new Date("2014-11-28"),
					jp: new Date("2014-12-06"),
					na: new Date("2014-11-21"),
				},
				type: "Figure",
			},
		];

        (getCharacters as jest.Mock).mockResolvedValue(characters);

		render(<HomePage characters={characters} />);
        
        expect(screen.findByText('Mario')).toBeTruthy();
        expect(screen.findByText('Luigi')).toBeTruthy();
    });
});