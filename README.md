# Protolabs

A full-stack web application with a **Next.js** frontend and **FastAPI** backend.

## Project Structure

```
protolabs/
├── client/          # Next.js frontend (TypeScript)
├── server/          # FastAPI backend (Python)
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+

### Client (Frontend)
```bash
cd client
npm install
npm run dev
```

### Server (Backend)
```bash
cd server
pip install -r requirements.txt
uvicorn main:app --reload
```

## Tech Stack
- **Frontend**: Next.js, TypeScript, React
- **Backend**: FastAPI, Python
- **API**: REST

## License
MIT
