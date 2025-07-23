import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import CharacterCard from "../CharacterCard";
import { Character } from "../../../../api/charactersApi";

const mockCharacter: Character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("CharacterCard", () => {
    it("muestra la información del personaje correctamente", () => {
        renderWithRouter(<CharacterCard character={mockCharacter} />);

        // Validar texto
        expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
        expect(screen.getByText("Male")).toBeInTheDocument();
        expect(screen.getByText("Alive")).toBeInTheDocument();
        expect(screen.getByText("Human")).toBeInTheDocument();


        // Validar imagen
        const image = screen.getByAltText("Rick Sanchez") as HTMLImageElement;
        expect(image.src).toBe(mockCharacter.image);

        // Validar botón/link
        const link = screen.getByRole("link", { name: /ver detalles/i });
        expect(link).toHaveAttribute("href", "/character/1");
    });
});
