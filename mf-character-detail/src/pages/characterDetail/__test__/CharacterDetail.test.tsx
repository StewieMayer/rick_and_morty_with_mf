import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CharacterDetail from "../CharacterDetail";
import { useCharacterDetail } from "../useCharacterDetail";

// 👇 Mock del componente Episode para evitar llamadas reales
jest.mock("../components/Episode", () => ({
  __esModule: true,
  default: ({ episodeId }: { episodeId: string }) => (
    <tr>
      <td>{episodeId}</td>
      <td>Nombre del episodio {episodeId}</td>
      <td>Fecha {episodeId}</td>
    </tr>
  ),
}));

// 👇 Mock del hook
jest.mock("../useCharacterDetail");

describe("CharacterDetail", () => {
  const mockGoHome = jest.fn();

  const mockData = {
    name: "Rick Sanchez",
    image: "https://rick.com/image.png",
    status: "Alive",
    species: "Human",
    gender: "Male",
    location: { name: "Earth (C-137)" },
    episode: ["https://api.com/episode/1", "https://api.com/episode/2"],
  };

  it("muestra 'Cargando...' mientras carga", () => {
    (useCharacterDetail as jest.Mock).mockReturnValue({
      data: null,
      error: false,
      isLoading: true,
    });

    render(<CharacterDetail />);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });

  it("muestra error si falla", () => {
    (useCharacterDetail as jest.Mock).mockReturnValue({
      data: null,
      error: true,
      isLoading: false,
    });

    render(<CharacterDetail />);
    expect(screen.getByText("Error al cargar personaje")).toBeInTheDocument();
  });

  it("muestra los datos del personaje correctamente", () => {
    (useCharacterDetail as jest.Mock).mockReturnValue({
      data: mockData,
      error: false,
      isLoading: false,
      goHome: mockGoHome,
    });

    render(<CharacterDetail />);

    // Datos del personaje
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Rick Sanchez");
    expect(screen.getByAltText("Rick Sanchez")).toHaveAttribute("src", "https://rick.com/image.png");

    // Botón volver
    const button = screen.getByRole("button", { name: /Volver/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockGoHome).toHaveBeenCalled();
  });

  it("renderiza los episodios", () => {
    (useCharacterDetail as jest.Mock).mockReturnValue({
      data: mockData,
      error: false,
      isLoading: false,
      goHome: mockGoHome,
    });

    render(<CharacterDetail />);
    
    expect(screen.getByText("1")).toBeInTheDocument(); // ID del episodio
    expect(screen.getByText("Nombre del episodio 1")).toBeInTheDocument();
    expect(screen.getByText("Fecha 1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});

