import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "sudoku",
    title: "Sudoku Game",
    summary: "Angular application for playing Sudoku. with puzzle generation and solving.",
    stack: ["Angular", "RxJS", "TypeScript"],
    links: { github: "https://github.com/thabangramathe/sudoku-game", demo: "#" },
  },
  {
    slug: "wifi-cursor-controller",
    title: "WiFi Cursor Controller",
    summary: "Mobile app controlling PC cursor over Wi-Fi (Flutter + Python).",
    stack: ["Flutter", "Python", "Sockets"],
    links: { github: "https://github.com/thabangramathe/wifi-cursor-controller", demo: "#" },
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker CLI",
    summary: "Command-line interface for tracking expenses.",
    stack: ["Python", "argparse"],
    links: { github: "https://github.com/thabangramathe/expense-tracker", demo: "#" },
  },
  {
    slug: "chess-ai",
    title: "Chess AI",
    summary: "A chess engine using minimax algorithm with alpha-beta pruning.",
    stack: ["Java"],
    links: { github: "https://github.com/thabangramathe/chessai", demo: "#" },
  }
];
